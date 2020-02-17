window.onload = function(){
//****** setUp start ******//
  let scene, camera, renderer,
    width = window.innerWidth,
    height = window.innerHeight,
    canvas = document.querySelector('#canvas');

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(60, width/height, 0.1, 8000);
  camera.position.set(0, 150, 400);

  let controls = new THREE.OrbitControls(camera);

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

  function animate(){
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };

  animate();
};
