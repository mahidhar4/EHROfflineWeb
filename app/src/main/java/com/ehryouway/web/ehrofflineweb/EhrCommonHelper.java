package com.ehryouway.web.ehrofflineweb;

import android.content.Context;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import com.loopj.android.http.AsyncHttpClient;
import com.loopj.android.http.AsyncHttpResponseHandler;
import com.loopj.android.http.RequestParams;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.UnsupportedEncodingException;
import java.lang.reflect.Type;

import cz.msebera.android.httpclient.entity.ByteArrayEntity;
import cz.msebera.android.httpclient.message.BasicHeader;
import cz.msebera.android.httpclient.protocol.HTTP;

/**
 * Created by Mahesh.Paruchuri on 8/20/2016.
 */
class EhrCommonHelper<T> {


    private static final String BASE_URL = "http://192.168.0.127/";

    private static AsyncHttpClient client = new AsyncHttpClient();

    public static void get(String url, RequestParams params, AsyncHttpResponseHandler responseHandler) {
        client.get(getAbsoluteUrl(url), params, responseHandler);
    }

    public static void post(String url, RequestParams params, AsyncHttpResponseHandler responseHandler) {
        client.post(getAbsoluteUrl(url), params, responseHandler);
    }


    public static void post(Context cont, String url, ByteArrayEntity params, AsyncHttpResponseHandler responseHandler) throws UnsupportedEncodingException, JSONException {
        client.post(cont, getAbsoluteUrl(url), params, "application/json",responseHandler);
    }



    public static void post(Context cont, String url, JSONObject jsonObject, AsyncHttpResponseHandler responseHandler) throws UnsupportedEncodingException, JSONException {
        ByteArrayEntity entity = new ByteArrayEntity(jsonObject.toString().getBytes("UTF-8"));
        entity.setContentType(new BasicHeader(HTTP.CONTENT_TYPE, "application/json"));
        client.post(cont, getAbsoluteUrl(url), entity, "application/json",responseHandler);
    }



    public void post(Context cont, String url, T jsonObject, AsyncHttpResponseHandler responseHandler) throws UnsupportedEncodingException, JSONException {
        Gson gson = new Gson();
        Type type = new TypeToken<T>() {}.getType();
        String json = gson.toJson(jsonObject, type);
        ByteArrayEntity entity = new ByteArrayEntity(json.toString().getBytes("UTF-8"));
        entity.setContentType(new BasicHeader(HTTP.CONTENT_TYPE, "application/json"));
        client.post(cont, getAbsoluteUrl(url), entity, "application/json", responseHandler);
    }


    public T GetDataFromBytes(byte[] responseBody, T classObje){

        Gson gson1 = new Gson();
        Type type = new TypeToken<T>() {}.getType();

        return gson1.fromJson(new String(responseBody), type);
    }





    private static String getAbsoluteUrl(String relativeUrl) {
        return BASE_URL + relativeUrl;
    }

}
