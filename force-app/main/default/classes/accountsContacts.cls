public with sharing class accountsContacts {
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts()
   {
    return [select id,name from Account Limit 10];
   }


   @AuraEnabled
   public static List<contact> relatedContacts(string accId){
        if(!string.isEmpty(accId))
        {
            return [select Id,Name,Phone,Email,Title from contact where AccountId=:accId];
        }else {
            return null;
        }
   }
}
