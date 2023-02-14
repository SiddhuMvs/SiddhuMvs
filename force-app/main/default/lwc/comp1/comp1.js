import { api, LightningElement,track,wire  } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import {fireEvent} from 'c/pubsub';

export default class Comp1 extends LightningElement {

    // @track Received ;
    // //@track enteredText;
    // sendHandler()
    // {
    //     this.Received = 'Dispatch Event' 
    // }
    // chnageH(event)
    // {
    //     this.enteredText = event.target.value;
    // }

    // hello lwc added on 8th feb
    // hello lwc second part addedd to the system
    // @track delivered;
     message ='Hello from parent';

    @wire (CurrentPageReference) pageRef;

    trackPickValue(event)
    {
        //debugger;
        //this.delivered = event.detail;
        this.template.querySelector('c-comp3').loadAccounts(event.detail);
    }

    clickme(event)

    {
        this.message = event.target.value;
        let data = this.message;
        console.log('message--->'+ data);
        fireEvent(this.pageRef,'comp',data);
    }

}