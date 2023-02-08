import { LightningElement,api,wire,track } from 'lwc';
import rateField from '@salesforce/schema/Account.Rating';
import { getPicklistValues, getObjectInfo} from 'lightning/uiObjectInfoApi';
import accObj from '@salesforce/schema/Account';

export default class Comp2 extends LightningElement {

    // //@api enteredText;
    // sendHandler(){
    //    const newEvent = new CustomEvent('send');
    //     this.dispatchEvent(newEvent);
    // }
    
    @track ratingOptions = [];
    // @api accType;

    @wire(getObjectInfo, {objectApiName : accObj})
    accObjInfo;

    @wire(getPicklistValues, {recordTypeId : '$accObjInfo.data.defaultRecordTypeId', fieldApiName : rateField})
    wiredData({data,error}){
        if(data)
        {
            console.log('Data received from picklist values '+JSON.stringify(data.values));
            this.ratingOptions = data.values.map(typeField =>{
                return {
                    label : `${typeField.label}`,
                    value : `${typeField.value}`
                };
            });
            console.log('options are'+JSON.stringify(this.ratingOptions));
            this.ratingOptions.unshift({label:"All Accounts", value: ""})
        } else if(error)
        {
            console.log(JSON.stringify(error));
        }
    }
    chnageTypeHandler(event)
    {
        const rateIt = event.detail.value;

        const newEvent = new CustomEvent('pickvalue',{detail:rateIt});
        this.dispatchEvent(newEvent);
    }
}
