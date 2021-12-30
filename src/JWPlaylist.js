 const playlist = [
   {
     sources: [
       {
         drm: {
           widevine: {
             url: "https://content.jwplatform.com/v2/media/m6VzwETH/license?drm=widevine&policy_id=NGJ6OXFZ&version=v1&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDA4NzMwNDYsInJlc291cmNlIjoiL3YyL21lZGlhL202Vnp3RVRIL2xpY2Vuc2U_ZHJtPXdpZGV2aW5lJnBvbGljeV9pZD1OR0o2T1hGWiZ2ZXJzaW9uPXYxIn0.9CKtI2lW_xPB1F6FW_afIRKWAVnACy2a5pyEjvEqAJs",
           },
           playready: {
             url: "https://content.jwplatform.com/v2/media/m6VzwETH/license?drm=playready&policy_id=NGJ6OXFZ&version=v1&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDA4NzMwNDYsInJlc291cmNlIjoiL3YyL21lZGlhL202Vnp3RVRIL2xpY2Vuc2U_ZHJtPXBsYXlyZWFkeSZwb2xpY3lfaWQ9TkdKNk9YRlomdmVyc2lvbj12MSJ9.h8smvZmKfs8Hb8C9qxnGVKMiUo6NaDJQ03DQ8bBsxXo",
           },
         },
         file: "https://content.jwplatform.com/v2/media/m6VzwETH/manifest.mpd?policy_id=NGJ6OXFZ&version=v1&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDA4NzMwNDYsInJlc291cmNlIjoiL3YyL21lZGlhL202Vnp3RVRIL21hbmlmZXN0Lm1wZD9wb2xpY3lfaWQ9TkdKNk9YRlomdmVyc2lvbj12MSJ9.cv155Db1r73sCRJloCMMIAAE8nDyBNpcDTB1D7oIirM",
         type: "application/dash+xml",
       },
       {
         drm: {
           fairplay: {
             processSpcUrl:
               "https://content.jwplatform.com/v2/media/m6VzwETH/license?drm=fairplay&policy_id=NGJ6OXFZ&version=v1&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDA4NzMwNDYsInJlc291cmNlIjoiL3YyL21lZGlhL202Vnp3RVRIL2xpY2Vuc2U_ZHJtPWZhaXJwbGF5JnBvbGljeV9pZD1OR0o2T1hGWiZ2ZXJzaW9uPXYxIn0.JSa5iIKe5ntscDFcqW3nlIHaWZoecNKVYo8-L0i1MDY",
             certificateUrl:
               "https://content.jwplatform.com/v2/fairplay-streaming/certificate?policy_id=NGJ6OXFZ&version=v1&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDA4NzMwNDYsInJlc291cmNlIjoiL3YyL2ZhaXJwbGF5LXN0cmVhbWluZy9jZXJ0aWZpY2F0ZT9wb2xpY3lfaWQ9TkdKNk9YRlomdmVyc2lvbj12MSJ9.hVEL7go7PJ9bS7HBbOFM0aT1Ns17cNuZUpmue5yaR64",
           },
         },
         file: "https://content.jwplatform.com/v2/media/m6VzwETH/playlist.m3u8?policy_id=NGJ6OXFZ&version=v1&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDA4NzMwNDYsInJlc291cmNlIjoiL3YyL21lZGlhL202Vnp3RVRIL3BsYXlsaXN0Lm0zdTg_cG9saWN5X2lkPU5HSjZPWEZaJnZlcnNpb249djEifQ.ix1yeYJVe6RPWBqBhMyB_wogundKTlnqjiEoU_05MIU",
         type: "application/vnd.apple.mpegurl",
       },
     ],
   },
 ];

 export default playlist;