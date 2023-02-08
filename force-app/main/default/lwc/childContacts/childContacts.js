import { LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener,  unregisterAllListeners } from 'c/pubsub';
import relatedContacts from '@salesforce/apex/accountsContacts.relatedContacts';

export default class ChildContacts extends LightningElement {

    contacts;
    accountRelatedContacts;

    @wire(CurrentPageReference) pageRef;
    
    connectedCallback()
    {
        registerListener('account',this.childContactss,this);
    }

    childContactss(payload)
    {
        debugger;
        console.log('inside child methods '+payload);
        this.contacts = payload;
        console.log('assigned value '+this.contacts);

        relatedContacts({accId:this.contacts})
        .then((result)=>{
            debugger;
            this.accountRelatedContacts = result;
            console.log('inside relatedContacts result line 25'+result);
        })
        .catch((error)=>{
            console.log('error found'+error.body.message);
        })
    }

    disconnectedCallback()
    {
        unregisterAllListeners(this);
    }
}