package com.ehryouway.web.ehrofflineweb;

/**
 * Created by Mahesh.Paruchuri on 8/20/2016.
 */
public class EhrGenericObject<T> {
    // Replacing our variable type with the generic identifier.
    T mObject;

    public EhrGenericObject(T _object) {
        mObject = _object;
    }

    public T get(){
        return mObject;
    }

    public void set(T _object){
        mObject = _object;
    }
}