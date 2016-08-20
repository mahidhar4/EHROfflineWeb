package com.ehryouway.web.ehrofflineweb;

import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.NavigationView;
import android.support.design.widget.Snackbar;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.webkit.ValueCallback;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.Toast;

import com.loopj.android.http.AsyncHttpResponseHandler;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import cz.msebera.android.httpclient.Header;
import cz.msebera.android.httpclient.HttpResponse;
import cz.msebera.android.httpclient.NameValuePair;
import cz.msebera.android.httpclient.client.ClientProtocolException;
import cz.msebera.android.httpclient.client.HttpClient;
import cz.msebera.android.httpclient.client.entity.UrlEncodedFormEntity;
import cz.msebera.android.httpclient.client.methods.HttpPost;
import cz.msebera.android.httpclient.entity.ByteArrayEntity;
import cz.msebera.android.httpclient.impl.client.DefaultHttpClient;
import cz.msebera.android.httpclient.message.BasicHeader;
import cz.msebera.android.httpclient.message.BasicNameValuePair;
import cz.msebera.android.httpclient.protocol.HTTP;


public class MainActivity extends AppCompatActivity
        implements NavigationView.OnNavigationItemSelectedListener {


    WebView myWebView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });



        Button ButtonSave = (Button) findViewById(R.id.bttnSaveAsDraft);
        ButtonSave.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                try {
                    onClickBtton();
                } catch (IOException e) {
                    e.printStackTrace();
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        });

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, toolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.setDrawerListener(toggle);
        toggle.syncState();

        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);



        myWebView = (WebView) findViewById(R.id.activity_main_webview);
        WebSettings webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        //myWebView.setWebViewClient(new WebViewClient());
        myWebView.addJavascriptInterface(new WebAppInterface(this), "Android");

       // myWebView.loadUrl("~/www/index.html");

        myWebView.loadUrl("file:///android_asset/www/index.html");

    }


    public JSONArray getPersonsData() throws ClientProtocolException, IOException, JSONException
    {
        JSONArray personsData = null;
        try {
            HttpPost httppost = new HttpPost("http://192.168.0.127/EMR_Web_WCF_Common/EMRCommon/ValidateLogin");
            HttpResponse response = null;
            HttpClient httpclient = new DefaultHttpClient();
            //add data
            List<NameValuePair> nameValuePairs = new ArrayList<NameValuePair>(1);
            nameValuePairs.add(new BasicNameValuePair("data", "{}"));
            httppost.setEntity(new UrlEncodedFormEntity(nameValuePairs));
            httppost.setHeader("Content-type","application/json");
            //execute http post
            response = httpclient.execute(httppost);

            personsData = new JSONArray(response.toString());


        }
        catch (IOException e) {
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }
        return personsData;
    }



    public class Task {

        private String summary;
        private String description;
        private int priority;

        public Task(String summary, String description, int priority) {
            this.summary = summary;
            this.description = description;
            this.priority = priority;
        }
    }


    public void onClickBtton() throws IOException, JSONException {


        final EhrCommonHelper commonHelp = new EhrCommonHelper();

        JSONObject jsonObject = new JSONObject("{\"UserName\":\"alexander\",\"UserPassword\":\"alexande123*\",\"practicemodel\":{\"AddressLine\":null,\"ApplicationType\":0,\"CallCenterDBServerName\":null,\"City\":null,\"DBServerName\":\"192.168.0.65\",\"EHREasyFormsCommonJSFileName\":null,\"EHRSessionID\":null,\"EmergencyDBServerName\":\"192.168.0.71\\\\MSSQL_LOCALEMERG\",\"EmployeeId\":3705,\"FirstName\":null,\"GroupNPI\":null,\"LastName\":null,\"LoggedFacilityID\":0,\"LoggedFacilityName\":null,\"LoggedUserID\":0,\"LoggedUserName\":null,\"MMISID\":null,\"MiddleInitial\":null,\"OldPassword\":null,\"PersonRelationshipIdColumn\":0,\"PortalUserName\":null,\"PortalUserType\":0,\"PracticeID\":36,\"PracticeName\":\"Dr. John Doe\",\"RelationshipPersonID\":0,\"State\":null,\"Street1\":null,\"Street2\":null,\"Telephone\":null,\"Title\":null,\"UserType\":0,\"Zip\":null,\"clientIP\":null,\"clientSystemLocalIP\":null,\"emrurlsmodel\":{\"EMERGENCYMGMT_IMPORTNOTES\":null,\"EMRAppServerCentralizerPrimaryURL\":null,\"EMRAppServerCentralizerSecondaryURL\":null,\"EMRCentralizerSocketPrimaryURL\":\"ws://192.168.0.15/EHRCentralizer/EHRCentralizerHandler.ashx\",\"EMRCentralizerSocketSecondaryURL\":\"ws://192.168.0.15/EHRCentralizer/EHRCentralizerHandler.ashx\",\"EMRServicesCentralizerPrimaryURL\":null,\"EMRServicesCentralizerSecondaryURL\":null,\"EMRServicesCentralizerURL\":null,\"EMRSureScriptClinicalMessageWebServiceURL\":\"http://66.181.11.241/EMRClinicalMessages/Service/ClinicalMessaging.svc\",\"EMRSureScriptDirectoryWebServiceURL\":\"http://66.181.11.241/SureScriptDirectoryServices/DirectoryServices/EMRDirectoryServices.svc\",\"EMRSureScriptERxSecondaryWebServiceURL\":\"http://66.181.11.241/EMRERx/services/ERx.svc\",\"EMRSureScriptMedHxSecondaryWebServiceURL\":\"http://66.181.11.241/EMR%20SureScript%20Drug%20Formulary/Services/PrescriptionBenefit.svc\",\"EMRSureScriptMedHxWebServiceURL\":\"http://66.181.11.241/EMR%20SureScript%20Drug%20Formulary/Services/PrescriptionBenefit.svc\",\"EMRSureScript_ERxWebServiceURL\":\"http://66.181.11.241/EMRERx/services/ERx.svc\",\"EMRWebWCFPrimaryExternalURL\":\"http://192.168.0.15/\",\"EMRWebWCFSecondaryExternalURL\":\"http://192.168.0.15/\",\"EmgWebURLPrimary\":\"http://192.168.0.15/EMR_WEB/\",\"EmgWebURLSecondary\":\"http://192.168.0.15/EMR_WEB/\",\"EmgWebWCFExternalPrimary\":\"http://192.168.0.15/\",\"EmgWebWCFExternalSecondary\":\"http://192.168.0.15/\",\"EmrMedispanDataBaseConnetcingPrimaryServerUrl\":\"http://192.168.0.15/EMR_MEDISPAN_Interactions/CheckMEDISPAN_Interactions.svc\",\"EmrMedispanDataBaseConnetcingSecondaryServerUrl\":\"http://192.168.0.15/EMR_MEDISPAN_Interactions/CheckMEDISPAN_Interactions.svc\",\"GETDBSERVERINFO\":null,\"PATIENTPORTAL\":null,\"PrimaryEMRWebURL\":\"http://192.168.0.15/EMR_WEB/\",\"SENDERRORMAIL\":null,\"SENDMESSAGESFROMEMR\":null,\"SecondaryEMRWebURL\":\"http://localhost/EMR_WEB/\",\"TERMINALSERVICE\":null,\"UPLOADEMERGENCYMGMTFILES\":null},\"isEmergencyWeb\":false,\"isEmergencyWebWriteMode\":false,\"practicesettingsmodel\":{\"EMRPracticePortalID\":0,\"IsDebugModeEnabled\":false,\"PracticeType\":0,\"QuestBusinessUnitsUsingForLoggedPractice\":1,\"SessionInactivityTimeInMins\":0}}}");
        ByteArrayEntity entity = new ByteArrayEntity(jsonObject.toString().getBytes("UTF-8"));
        entity.setContentType(new BasicHeader(HTTP.CONTENT_TYPE, "application/json"));


        commonHelp.post(getApplicationContext(), "EMR_Web_WCF_Common/EMRCommon/ValidateLogin", entity, new AsyncHttpResponseHandler() {
            @Override
            public void onSuccess(int statusCode, Header[] headers, byte[] responseBody) {
                if(responseBody!=null){
                    String test =  new String(responseBody);
                    Toast.makeText(getApplicationContext(),test , Toast.LENGTH_LONG).show();

                    BaseModel base = new BaseModel();
                    base = (BaseModel) commonHelp.GetDataFromBytes(responseBody, base);
                }
                else
                    Toast.makeText(getApplicationContext(),"success", Toast.LENGTH_LONG).show();
            }

            @Override
            public void onFailure(int statusCode, Header[] headers, byte[] responseBody, Throwable error) {

                if(responseBody!=null){
                    Toast.makeText(getApplicationContext(),responseBody.toString(), Toast.LENGTH_LONG).show();



                }
                else
                    Toast.makeText(getApplicationContext(),"failed", Toast.LENGTH_LONG).show();

            }
        });




        //getPersonsData();

        //return;
        //myWebView.loadUrl("PerformMandatoryValidationsOnElements('"+ test  +"')");

    }

    public void DateValidations(){


        myWebView.evaluateJavascript("PeformInvalidInputValidations()", new ValueCallback<String>() {
            @Override
            public void onReceiveValue(String s) {
               // new WebAppInterface(getApplicationContext()).showToast2(s);
                DataTypeValidations();
            }
        });
    }

    public void DataTypeValidations(){

        myWebView.evaluateJavascript("PerformDateAndTimeValidations()", new ValueCallback<String>() {
            @Override
            public void onReceiveValue(String s) {
               // new WebAppInterface(getApplicationContext()).showToast2(s);
            }
        });
    }





    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        // Handle navigation view item clicks here.
        int id = item.getItemId();

        if (id == R.id.nav_camera) {
            // Handle the camera action
        } else if (id == R.id.nav_gallery) {

        } else if (id == R.id.nav_slideshow) {

        } else if (id == R.id.nav_manage) {

        } else if (id == R.id.nav_share) {

        } else if (id == R.id.nav_send) {

        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }
}
