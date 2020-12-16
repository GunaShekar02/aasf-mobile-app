package com.aasfmobileapp; // ← Make sure that is your package name

import android.content.Intent;
import android.os.Bundle;
// import android.support.v7.app.AppCompatActivity; //  ← For RN >= 0.60
import androidx.appcompat.app.AppCompatActivity; // ← For RN <= 0.59

public class SplashActivity extends AppCompatActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    Intent intent = new Intent(this, MainActivity.class);
    startActivity(intent);
    finish();
  }
}
