import { LightningElement,wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener, unregisterAllListeners} from 'c/pubsub';

export default class Comp4 extends LightningElement {

    received;

    @wire (CurrentPageReference) pageRef;

    connectedCallback()
    {
        registerListener('comp',this.callBackMethodd,this)
        
    }

    callBackMethodd(data)

    {   
        console.log('inside the child ',data);
        this.received = data;
    }

    disconnectedCallback()
    {
        unregisterAllListeners(this);
    }

    get cardvis()
    {
        if(this.received)
        {
            console.log('yes its true');
            return true;
        }return false;
    }
}