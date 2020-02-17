window.onload = function(){
//****** setUp start ******//
  let scene, camera, renderer,
    canvas = document.querySelector('#canvas'),
    first_move_listener = document.querySelector('.first'),
    width = 400,
    height = 400;


  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 8000);
  camera.position.set(0, 150, 400);

  let controls = new THREE.OrbitControls(camera, first_move_listener);

  renderer = new THREE.WebGLRenderer({physicallyCorrectLights : true, canvas:canvas, antialias:true});//
  renderer.setSize(width, height);
  renderer.setClearColor(0x66CDAA);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;





//****** setUp end ******//
//** light start **//

  let col_white = 0xffffff;
  let col_green = 0x009900;
  let col_red = 0x990000;

  let Amb_light = new THREE.AmbientLight(col_white);
  scene.add(Amb_light);

  let Dir_light = new THREE.DirectionalLight(col_white, 0.5);
  Dir_light.position.set(150, 0, 0);
  scene.add(Dir_light);

  let spot_light = new THREE.SpotLight( col_white, 0.5, 2000 );
  spot_light.position.set(-120, 0, 0);
  spot_light.castShadow = true;
  spot_light.shadow.mapSize.width = 2048;
  spot_light.shadow.mapSize.height = 2048;
  spot_light.shadow.camera.near = 0.5;
  spot_light.shadow.camera.far = 500;
  spot_light.physicallyCorrectLights = true;
  scene.add(spot_light);

//** light end **//
//****** code start ******//

  let manager = new THREE.LoadingManager();
  let loader = new THREE.ImageLoader(manager);

  let textureBody = new THREE.Texture();

  loader.load('src/cats/Maps/Cats_gloss.jpg', function (image){
    textureBody.image = image;
    textureBody.needsUpdate = true;
  });

  var meshes = [];
  let head, body, bumpMapHead, bumpMapBody;

  let objLoader = new THREE.OBJLoader();

  objLoader.load('src/cats/Cats_obj.obj', function (object){
    object.traverse ( function ( child ){
      if(child instanceof THREE.Mesh)
      {
        meshes.push(child);
      }
    });
    body = meshes[0];
    body.position.y = -80;
    body.rotation.y = 90*Math.PI / 2;
    scene.add(body);

    body.material = new THREE.MeshPhongMaterial({
      map: textureBody,
      specular: 0x995566
    });
  });
  //first_move_listener.addEventListener('mouseover', animate());
  function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  animate();



//***********************************************************************


  //****** setUp start ******//
    let scene2, camera2, renderer2,
      canvas2 = document.querySelector('#canvas2'),
      second_move_listener = document.querySelector('.second'),//.second
      width2 = 400,
      height2 = 400;


    scene2 = new THREE.Scene();

    camera2 = new THREE.PerspectiveCamera(60, width2/height2, 0.1, 8000);
    camera2.position.set(0, 100, 70);

    let controls2 = new THREE.OrbitControls(camera2, second_move_listener);

    renderer2 = new THREE.WebGLRenderer({physicallyCorrectLights : true, canvas:canvas2, antialias:true});//
    renderer2.setSize(width2, height2);
    renderer2.setClearColor(0x66CDAA);
    renderer2.shadowMap.enabled = true;
    renderer2.shadowMap.type = THREE.PCFShadowMap;




    controls2.enableDamping = true;

  //****** setUp end ******//
  //** light start **//

    let col_white2 = 0xffffff;
    let col_green2 = 0x009900;
    let col_red2 = 0x990000;

    let Amb_light2 = new THREE.AmbientLight(col_white2);
    scene2.add(Amb_light2);

    let Dir_light2 = new THREE.DirectionalLight(col_white2, 0.5);
    Dir_light2.position.set(150, 0, 0);
    scene2.add(Dir_light2);

    let spot_light2 = new THREE.SpotLight( col_white2, 0.5, 2000 );
    spot_light2.position.set(-120, 0, 0);
    spot_light2.castShadow = true;
    spot_light2.shadow.mapSize.width = 2048;
    spot_light2.shadow.mapSize.height = 2048;
    spot_light2.shadow.camera.near = 0.5;
    spot_light2.shadow.camera.far = 500;
    spot_light2.physicallyCorrectLights = true;
    scene2.add(spot_light2);

  //** light end **//
  //****** code start ******//

    let manager2 = new THREE.LoadingManager();
    let loader2 = new THREE.ImageLoader(manager2);

    let textureBody2 = new THREE.Texture();

    loader2.load('src/alps/maps/default_Base_Color.jpg', function (image2){
      textureBody2.image = image2;
      textureBody2.needsUpdate = true;
    });

    var meshes2 = [];
    let head2, body2, bumpMapHead2, bumpMapBody2;

    let objLoader2 = new THREE.OBJLoader();

    objLoader2.load('src/alps/Alpine rock.obj', function (object2){
      object2.traverse ( function ( child2 ){
        if(child2 instanceof THREE.Mesh)
        {
          meshes2.push(child2);
        }
      });
      body2 = meshes2[0];
      body2.position.y = -20;
      //body2.rotation.y = 90*Math.PI / 2;
      scene2.add(body2);

      body2.material = new THREE.MeshPhongMaterial({
        map: textureBody2,
        specular: 0x808000
      });
    });
    second_move_listener.addEventListener('mouseover', animate2());
    function animate2(){
      requestAnimationFrame(animate2);
      controls2.update();
      renderer2.render(scene2, camera2);
    };

    animate2();
};
