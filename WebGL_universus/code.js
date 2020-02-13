window.onload = function(){
  //setUp start
  let scene, camera, renderer,
    width = window.innerWidth,
    height = window.innerHeight,
    canvas = document.querySelector('#canvas');

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(60, width/height, 1, 4000);
  camera.position.set(300, 0, -350);

  renderer = new THREE.WebGLRenderer({physicallyCorrectLights : true, canvas:canvas, antialias:true});
  renderer.setSize(width, height);
  renderer.setClearColor(0x000000);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  light2 = new THREE.AmbientLight(0x222222);
  scene.add(light2);

  var light = new THREE.SpotLight( 0xffffff, 1.5, 2000 );
  light.position.set(101, 0, 0);
  light.castShadow = true;
  light.shadow.mapSize.width = 2048;
  light.shadow.mapSize.height = 2048;
  light.shadow.camera.near = 0.5;
  light.shadow.camera.far = 500;
  scene.add(light);

  const orbit = new THREE.OrbitControls(camera);
  //setUp end

  //BUTTONS start
  btn_earth = document.querySelector('#btn_earth');
  btn_earth.addEventListener('click', function(){
    setInterval(function(){
      //camera.position.set(sun.position.x,sun.position.y,sun.position.z+60);
      console.log('setint');
      //camera.lookAt(earth.position.x,earth.position.y,earth.position.z);
    }, 1);
  })
  //BUTTONS end

  //stars create begin
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
  //stars create finish

  //create planets begin

  let Planet = function(radius, texture){
    this.radius = radius;
    this.texture = texture;
    this.init = function(){
      let g = new THREE.SphereBufferGeometry(this.radius, 40, 40);
      let t = new THREE.TextureLoader().load(this.texture);
      t.anisotropy = 8;
      let m = new THREE.MeshStandardMaterial({map: t});
      let mesh = new THREE.Mesh(g, m);
      mesh.castShadow = true;
      return mesh;
    }
  }
  //SUN
  let sun_geometry = new THREE.SphereGeometry(100, 40, 40);
  let sun_texture = new THREE.TextureLoader().load('imgs/sun.jpg');
  let sun_material = new THREE.MeshBasicMaterial({map: sun_texture});
  let sun = new THREE.Mesh(sun_geometry, sun_material);
  sun.position.set(0, 0, 0);
  scene.add(sun);
  //SUN

  //Planets

  let mercury = new Planet(10, 'imgs/2k_mercury.jpg').init();
  scene.add(mercury);

  //EARTH & SATELLITE & MOON - BEGIN

  let earth = new Planet(20, 'imgs/8k_earth_daymap.jpg').init();
  //earth.position.set(540, -200, 300);
  scene.add(earth);

  //moon start
  let moon = new Planet(3, 'imgs/8k_moon.jpg').init();
  let moon_axis = new THREE.Object3D();
  moon_axis.add(moon);
  moon.position.set(45, 0, 0);
  scene.add(moon_axis);

  //satellite start
  let satellite_geometry = new THREE.Geometry();
  let satellite_material = new THREE.PointsMaterial({color: 'red',
    opacity: 0.3, size:2, sizeAttenuation: false});
  for(let i=0; i<1; i++){
    let vertex = new THREE.Vector3();
    //vertex.x = Math.sin(Math.PI/180*i)*(30-i/70);
    vertex.x = Math.sin(180/Math.PI*i)*(30-i/70);
    vertex.y = Math.random()*5;
    //vertex.z = Math.cos(Math.PI/180*i)*(30-i/70);
    vertex.z = Math.cos(180/Math.PI*i)*(30-i/70);
    satellite_geometry.vertices.push(vertex);
  }
  let satellite = new THREE.Points(satellite_geometry, satellite_material);
  satellite.castShadow = true;
  scene.add(satellite);
  //satellite end

  //EARTH & SATELLITE & MOON - END

  let venus = new Planet(15, 'imgs/2k_venus_surface.jpg').init();
  scene.add(venus);


  //saturn & ring - start
  let saturn = new Planet(30, 'imgs/2k_saturn.jpg').init();
  scene.add(saturn);

  let saturn_ring_geometry = new THREE.Geometry();
  let saturn_ring_material = new THREE.PointsMaterial({color: 0x3a3a3a,
    opacity: 0.3, size:1, sizeAttenuation: false});
  for(let i=0; i<1000; i++){
    let vertex = new THREE.Vector3();
    vertex.x = Math.sin(Math.PI/180*i)*(70-i/70);
    vertex.y = Math.random()*5;
    vertex.z = Math.cos(Math.PI/180*i)*(70-i/70);
    saturn_ring_geometry.vertices.push(vertex);
  }
  let ring = new THREE.Points(saturn_ring_geometry, saturn_ring_material);
  ring.castShadow = true;
  scene.add(ring);

  //saturn & ring -end
  //create planets end





  scene.fog=new THREE.Fog( 0x000000, 0.015, 3000 );



  //show on screen
  let t = 0;
  function animate(){
    requestAnimationFrame(animate);

    earth.position.x = Math.sin(t*0.25)*240;
    earth.position.z = Math.cos(t*0.25)*240;

    moon_axis.position.x = earth.position.x;
    moon_axis.position.y = earth.position.y;
    moon_axis.position.z = earth.position.z;
    moon_axis.rotation.z += 0.01;

    moon.rotation.y += 0.05;

    satellite.position.x =  earth.position.x;
    satellite.position.z =  earth.position.z;

    //need to some tune it
    light.position.x = Math.sin(t*0.25)*-180;
    light.position.z = Math.cos(t*0.25)*-180;

    mercury.position.x = Math.sin(t*0.09)*150;
    mercury.position.z = Math.cos(t*0.09)*150;

    venus.position.x = Math.sin(t*0.09)*200;
    venus.position.z = Math.cos(t*0.09)*200;

    saturn.position.x = Math.sin(t*0.09)*430;
    saturn.position.z = Math.cos(t*0.09)*430;

    ring.position.x = saturn.position.x;
    ring.position.z = saturn.position.z;

    //t += Math.PI/180*2-0.03;
    t += 0.005;

    earth.rotation.y += 0.01;
    satellite.rotation.x += 0.05;
    venus.rotation.y += 0.03;
    mercury.rotation.y += 0.05;
    saturn.rotation.y -= 0.01;
    ring.rotation.y += 0.01;

    /*camera.position.x = earth.position.x;
    camera.position.z = earth.position.z;
    camera.lookAt(sun.position);*/

    orbit.update();
    //camera.position.set(earth.position.x,earth.position.y,earth.position.z-150);
    //console.log(camera.position.z);
    //camera.lookAt(earth.position.x,earth.position.y,earth.position.z);

    renderer.render(scene, camera);
  };

  animate();
}
