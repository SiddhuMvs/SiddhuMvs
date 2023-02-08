public with sharing class accountClass {
    @AuraEnabled(cacheable=true)
    public static Map<string,string> getaccounts()
    {
        Map<string,string> accmap = new Map<string,string>();
        for(account acc:[select Id,rating from account])
        {
            accmap.put(acc.Id,acc.Rating);
        }
        return accmap;
    }
}
