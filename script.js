const apikey="AIzaSyC40mfxsjqUFoXgEGgeEmH4_4HClUnlaqM";
const clientid="796659008631-n0bk5pj9m5oni4vf02orq7m09ute3pf6.apps.googleusercontent.com";
const sampleurl="https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC40mfxsjqUFoXgEGgeEmH4_4HClUnlaqM"
const scopes="https://www.googleapis.com/auth/youtube.readonly";
const defaultChannel='techguyweb';
const REDIRECT_URI="http://127.0.0.1:5500/index.html"


  async function glogin()
  {
      try{
      let baseurl="https://accounts.google.com/o/oauth2/v2/auth?";
      let redirect_uri=REDIRECT_URI;
      let responseType="token";
      let scope="https://www.googleapis.com/auth/youtube.force-ssl";
      let include_granted_scopes='true';
      
        let state= 'pass-through value';
      let url=`${baseurl}client_id=${clientid}&redirect_uri=${redirect_uri}&response_type=token&scope=${scope}&include_granted_scopes=true&state=${state}`
     //let res=await fetch(url,{ method: 'GET', Headers: {'Access-Control-Allow-Origin':'*'}});
      let res=await fetch(url);
      console.log(res);
     //console.log(await res.json());
      //console.log("hello");
      //console.log(data.results);
      }
      catch(err)
      {
          console.log(err);
      }
  
  }
