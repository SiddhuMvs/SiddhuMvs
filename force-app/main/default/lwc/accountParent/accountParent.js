import { LightningElement,track,wire } from 'lwc';
import getAccounts from '@salesforce/apex/accountsContacts.getAccounts';
import { fireEvent } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';

export default class AccountParent extends LightningElement {

    @track accountsReturned;
   

    @wire (CurrentPageReference) pageRef;

    @wire(getAccounts)
    wiredAccounts({data,error})
    {
        if(data)
        {
            this.accountsReturned = data;
        }
        else if(error){
            console.log(error.message.body);
        }
    }
    clickHandler(event)
    {
        let accounts = event.currentTarget.dataset.id;
        console.log('returned accounts are '+ accounts);
        fireEvent(this.pageRef,'account',accounts);
    }
}