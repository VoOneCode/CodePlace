window.onload = function(){

//****** COMMON ****** //
  let col_white = 0xffffff,
    col_green = 0x009900,
    col_red = 0x990000,
    col_item_backdrop = 0x66CDAA;
    width = 400,
    height = 400,
    manager = new THREE.LoadingManager(),
    image_for_obj_loader = new THREE.ImageLoader(manager),
    objLoader = new THREE.OBJLoader();


//****** setUp first item start ******//
  let scene, camera, renderer,
    canvas = document.querySelector('#canvas'),
    first_move_listener = document.querySelector('.first');

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 8000);
  camera.position.set(0, 150, 400);

  let controls = new THREE.OrbitControls(camera, first_move_listener);

  renderer = new THREE.WebGLRenderer({physicallyCorrectLights : true, canvas:canvas, antialias:true});//
  renderer.setSize(width, height);
  renderer.setClearColor(col_item_backdrop);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

//****** setUp first item end ******//
//** light first item start **//

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

  let textureBody = new THREE.Texture();

  image_for_obj_loader.load('src/cats/Maps/Cats_gloss.jpg', function (image){
    textureBody.image = image;
    textureBody.needsUpdate = true;
  });

  let meshes = [],
    body;

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
  first_move_listener.addEventListener('mouseover', animate());
  function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  animate();


//***********************************************************************


//****** setUp second item start ******//
    let scene2, camera2, renderer2,
      canvas2 = document.querySelector('#canvas2'),
      second_move_listener = document.querySelector('.second');

    scene2 = new THREE.Scene();

    camera2 = new THREE.PerspectiveCamera(60, width/height, 0.1, 8000);
    camera2.position.set(0, 100, 70);

    let controls2 = new THREE.OrbitControls(camera2, second_move_listener);

    renderer2 = new THREE.WebGLRenderer({physicallyCorrectLights : true, canvas:canvas2, antialias:true});//
    renderer2.setSize(width, height);
    renderer2.setClearColor(col_item_backdrop);
    renderer2.shadowMap.enabled = true;
    renderer2.shadowMap.type = THREE.PCFShadowMap;
    controls2.enableDamping = true;

//****** setUp second item end ******//
//** light second item start **//

    let Amb_light2 = new THREE.AmbientLight(col_white);
    scene2.add(Amb_light2);

    let Dir_light2 = new THREE.DirectionalLight(col_white, 0.5);
    Dir_light2.position.set(150, 0, 0);
    scene2.add(Dir_light2);

    let spot_light2 = new THREE.SpotLight( col_white, 0.5, 2000 );
    spot_light2.position.set(-120, 0, 0);
    spot_light2.castShadow = true;
    spot_light2.shadow.mapSize.width = 2048;
    spot_light2.shadow.mapSize.height = 2048;
    spot_light2.shadow.camera.near = 0.5;
    spot_light2.shadow.camera.far = 500;
    spot_light2.physicallyCorrectLights = true;
    scene2.add(spot_light2);

//** light second item end **//
//****** code second item start ******//

    let textureBody2 = new THREE.Texture();

    image_for_obj_loader.load('src/alps/maps/default_Base_Color.jpg', function (image){
      textureBody2.image = image;
      textureBody2.needsUpdate = true;
    });

    var meshes2 = [];
    let body2;

    objLoader.load('src/alps/Alpine rock.obj', function (object){
      object.traverse ( function ( child ){
        if(child instanceof THREE.Mesh)
        {
          meshes2.push(child);
        }
      });
      body2 = meshes2[0];
      body2.position.y = -20;
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


//***********************************************************************
//****** setUp third item start ******//

    let scene3, camera3, renderer3,
    canvas3 = document.querySelector('#canvas3'),
    third_move_listener = document.querySelector('.third');

    scene3 = new THREE.Scene();

    camera3 = new THREE.PerspectiveCamera(45, width/height, 0.1, 8000);
    camera3.position.set(0, 150, 400);

    let controls3 = new THREE.OrbitControls(camera3, third_move_listener);

    renderer3 = new THREE.WebGLRenderer({physicallyCorrectLights : true, canvas:canvas3, antialias:true});//
    renderer3.setSize(width, height);
    renderer3.setClearColor(col_item_backdrop);
    renderer3.shadowMap.enabled = true;
    renderer3.shadowMap.type = THREE.PCFShadowMap;


//****** setUp third item end ******//
//** light third item start **//

    let Amb_light3 = new THREE.AmbientLight(col_white);
    scene3.add(Amb_light3);

    let Dir_light3 = new THREE.DirectionalLight(col_white, 0.5);
    Dir_light3.position.set(150, 0, 0);
    scene3.add(Dir_light3);

    let spot_light3 = new THREE.SpotLight( col_white, 0.5, 2000 );
    spot_light3.position.set(-120, 0, 0);
    spot_light3.castShadow = true;
    spot_light3.shadow.mapSize.width = 2048;
    spot_light3.shadow.mapSize.height = 2048;
    spot_light3.shadow.camera.near = 0.5;
    spot_light3.shadow.camera.far = 500;
    spot_light3.physicallyCorrectLights = true;
    scene3.add(spot_light3);

    let dae_loader = new THREE.ColladaLoader();
      dae_loader.options.convertUpAxis = true;
      dae_loader.load('src/pillow/pillow.dae', function(collada) {
          let dae = collada.scene;
          dae.position.set(0,0,0);
          dae.scale.set(9,9,9);
          dae.position.y = -100;
          scene3.add(dae);
      });
    third_move_listener.addEventListener('mouseover', animate3());
    function animate3(){
      requestAnimationFrame(animate3);
      controls3.update();
      renderer3.render(scene3, camera3);
    };

    animate3();
};
