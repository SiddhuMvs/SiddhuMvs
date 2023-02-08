import { LightningElement,api,wire,track } from 'lwc';
import allAccounts from '@salesforce/apex/accountTable.allAccounts';

export default class Comp3 extends LightningElement {

    //@api accountId;
    @track accounts;
    @api ratingValue;
    isLoaded = false;
    
    
    columns = [
      {label:'Name',fieldName:'Name',editable:true},
      {label:'Phone',fieldName:'Phone',editable:true},
      {label:'Industry',fieldName:'Industry',editable:true},
      {label:'Rating',fieldName:'Rating',editable:true}
    ];


   //  @wire(allAccounts)
   //  wiredData({data,error})
   //  {
   //    debugger;
   //    if(data)
   //    {
   //       this.accounts = data;
   //    } else if(error){
   //       console.log(error.body.message);
   //    }
   //  }
    @api
    loadAccounts(rating){
      //debugger;
      // if(rating)
      // {
      //    rating = "Hot";
      // }
      allAccounts({ ratingValue: rating }) 
            .then(result => {
                this.accounts = result;
            })
            .catch(error => {
               //  this.error = error;
            });
    }
    
   //  renderedCallback()
   //  {
   //    //debugger;
   //    if(!this.isLoaded){
   //       this.isLoaded = true;
   //       this.loadAccounts();
   //    }
      
   //  }

    
    
    
}