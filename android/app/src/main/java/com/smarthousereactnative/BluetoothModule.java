// // ToastModule.java

// package com.smarthousereactnative;

// import android.widget.Toast;
// import android.bluetooth.BluetoothAdapter;
// import android.content.Intent;
// import android.app.Activity;

// import com.facebook.react.bridge.NativeModule;
// import com.facebook.react.bridge.ReactApplicationContext;
// import com.facebook.react.bridge.ReactContext;
// import com.facebook.react.bridge.ReactContextBaseJavaModule;
// import com.facebook.react.bridge.ReactMethod;

// import java.util.Map;
// import java.util.HashMap;

// public class BluetoothModule extends ReactContextBaseJavaModule {
//   private static ReactApplicationContext reactContext;
//   private BluetoothAdapter bluetoothAdapter = null;
//   private static final int BLUETOOTH_ACTIVE = 1;
//   private static final int CONNECTION_PERMISSION = 2;
//   private Activity activity;
//   BluetoothModule(ReactApplicationContext context) {
//     super(context);
//     reactContext = context;
//     this.activity = context.getActivity();
//   }

//    @Override
//   public String getName() {
//     return "BluetoothTcc";
//   }

//   @Override
//   public Map<String, Object> getConstants() {
//     final Map<String, Object> constants = new HashMap<>();
//     // constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
//     // constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
//     return constants;
//   }

//   @ReactMethod
//   public void create() {
//     bluetoothAdapter = BluetoothAdapter.getDefaultAdapter();

//     if(bluetoothAdapter == null) {
//       Toast.makeText(getReactApplicationContext(), "Seu dispositivo não possui bluetooth", Toast.LENGTH_LONG).show();
//     }
//     else if(!bluetoothAdapter.isEnabled()) {
//       Intent enableBtIntent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
//       activity.startActivityForResult(enableBtIntent, BLUETOOTH_ACTIVE);
//     }
//   }
// }