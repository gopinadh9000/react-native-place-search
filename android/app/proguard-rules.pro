# React Native core
-keep class com.facebook.react.** { *; }
-keep class com.facebook.jni.** { *; }
-keep class com.facebook.proguard.annotations.DoNotStrip
-keepclassmembers class * {
  @com.facebook.proguard.annotations.DoNotStrip *;
}

# Keep React Native packages and native modules
-keep class com.facebook.react.bridge.** { *; }
-keep class com.facebook.react.modules.** { *; }
-keep class com.facebook.react.uimanager.** { *; }

# Keep classes referenced in JNI or native calls
-keepclassmembers class * {
    native <methods>;
}

# Firebase (keep common classes)
-keep class com.google.firebase.** { *; }
-keep class com.google.android.gms.** { *; }

# Firebase Cloud Messaging (if used)
-keep class com.google.firebase.messaging.** { *; }

# Keep Parcelable implementations
-keepclassmembers class * implements android.os.Parcelable {
  public static final android.os.Parcelable$Creator *;
}

# Hermes related rules
-keep class com.facebook.hermes.** { *; }
-keep class com.facebook.jni.HybridData { *; }

# Keep classes with specific annotations
-keep @interface com.facebook.proguard.annotations.DoNotStrip

# Keep Serializable implementations
-keepclassmembers class * implements java.io.Serializable {
  static final long serialVersionUID;
  private static final java.io.ObjectStreamField[] serialPersistentFields;
  private void writeObject(java.io.ObjectOutputStream);
  private void readObject(java.io.ObjectInputStream);
  java.lang.Object readResolve();
}

# General Android support libraries
-dontwarn androidx.**
-dontwarn com.facebook.react.**

# Miscellaneous to prevent crashes
-keepattributes Signature
-keepattributes *Annotation*

# Keep enums (avoid issues with enum stripping)
-keepclassmembers enum * {
    public static **[] values();
    public static ** valueOf(java.lang.String);
}
