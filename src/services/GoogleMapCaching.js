import camelCase from 'camel-case';
let singletonInstance = null;
export class GoogleMapCaching {
    locationCache = {};
    constructor(){
        if(!singletonInstance) {
            singletonInstance = this;
        }
        return singletonInstance;
    }
    isValueCached(key){
        return this.getLocationCacheValue(key);
    }
    locationCacheValue(key, value){
        this.locationCache[camelCase(key)] = value;
    }

    getLocationCacheValue(key){
        return this.locationCache[camelCase(key)];
    }
}