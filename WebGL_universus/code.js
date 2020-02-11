window.onload = function(){
  //setUp start
  let scene, camera, renderer,
    width = window.innerWidth,
    height = window.innerHeight,
    canvas = document.querySelector('#canvas');

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(60, width/height, 1, 3000);
  camera.position.set(300, 0, -350);



  //stars
  let stars_geometry = new THREE.Geometry();
  let stars_material = new THREE.PointsMaterial({color:0xbbbbbb,
    opacity:0.8,size:1,sizeAttenuation:false});
  for(let i=0; i < 4500000; i++){
    let vertex = new THREE.Vector3();
    vertex.x = Math.random()*2-1;
    vertex.y = Math.random()*2-1;
    vertex.z = Math.random()*2-1;
    vertex.multiplyScalar(900);
    stars_geometry.vertices.push(vertex);
  }
  let stars = new THREE.Points(stars_geometry, stars_material);
  stars.scale.set(50, 50, 50);
  scene.add(stars);


  renderer = new THREE.WebGLRenderer({physicallyCorrectLights : true, canvas:canvas, antialias:true});
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  /*light = new THREE.AmbientLight(0x222222);
  scene.add(light);*/

  //var light = new THREE.PointLight(0xFFFFFF, 1.9, 2000);
  var light = new THREE.SpotLight( 0xffffff );
  light.position.set(101, 0, 0);
  light.castShadow = true;
  light.shadow.mapSize.width = 2048;  // default
  light.shadow.mapSize.height = 2048; // default
  light.shadow.camera.near = 0.5;       // default
  light.shadow.camera.far = 500;
  //light.shadowMapWidth = 2048;
  //light.shadowMapHeight = 2048;
  scene.add(light);


  const orbit = new THREE.OrbitControls(camera);
  //setUp end

  //create planets start


  let sun_geometry = new THREE.SphereGeometry(100, 40, 40);
  let sun_texture = new THREE.TextureLoader().load('imgs/sun.jpg');
  let sun_material = new THREE.MeshBasicMaterial({map: sun_texture});
  let sun = new THREE.Mesh(sun_geometry, sun_material);
  sun.position.set(0, 0, 0);
  scene.add(sun);

  let merc_geometry = new THREE.SphereBufferGeometry(10, 40, 40);
  let merc_texture = new THREE.TextureLoader().load('imgs/2k_mercury.jpg');
  let merc_material = new THREE.MeshBasicMaterial({map: merc_texture});
  let merc = new THREE.Mesh(merc_geometry, merc_material);
  merc.position.set(150, 0, 0); //-150
  scene.add(merc);

  let earth_geometry = new THREE.SphereBufferGeometry(20, 40, 40);
  let earth_texture = new THREE.TextureLoader().load('imgs/8k_earth_daymap.jpg');
  let earth_material = new THREE.MeshStandardMaterial({map: earth_texture});
  let earth = new THREE.Mesh(earth_geometry, earth_material);
  earth.position.set(240, 0, 150);
  earth.castShadow = true;
  //earth.receiveShadow = false;

  scene.add(earth);

  let venera_geometry = new THREE.SphereGeometry(15, 40, 40);
  let venera_texture = new THREE.TextureLoader().load('imgs/2k_venus_surface.jpg');
  let venera_material = new THREE.MeshBasicMaterial({map: venera_texture});
  let venera = new THREE.Mesh(venera_geometry, venera_material);
  venera.position.set(-210, 0, 0);
  scene.add(venera);

  //create planets end

  //rotate planets
  function rotate(){
  }

  let t = 0;
  //show on screen
  function animate(){
    requestAnimationFrame(animate);

    earth.position.x = Math.sin(t*0.25)*240;
    earth.position.z = Math.cos(t*0.25)*240;

    light.position.x = Math.sin(t*0.25)*-180;

    light.position.z = Math.cos(t*0.25)*-180;
    console.log('lightZ=' + light.position.z);

    merc.position.x = Math.sin(t*0.09)*150;
    merc.position.z = Math.cos(t*0.09)*150;

    venera.position.x = Math.sin(t*0.09)*200;
    venera.position.z = Math.cos(t*0.09)*200;

    //t += Math.PI/180*2-0.03;
    t += 0.005;

    earth.rotation.y += 0.01;
    venera.rotation.y += 0.03;
    merc.rotation.y += 0.05;
    orbit.update();
    renderer.render(scene, camera);
  };

  animate();
}
