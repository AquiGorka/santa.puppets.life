var degreesToRadians = Math.PI / 180,
	radiansToDegrees = 180 / Math.PI,
	element = null,
	scene = null,
	camera = null,
	renderer = null,
	world = null,
	controls = null;

var add = function(opts) {
	var size = opts.size || [10, 10, 10],
		pos = opts.pos || [0, 0, 0],
		rot = opts.rot || [0, 0, 0],
		mesh = opts.mesh;
	//
	mesh.scale.set( size[0],
					size[1],
					size[2] );
	//
	mesh.position.set( pos[0],
						pos[1],
						pos[2] );
	//
	mesh.rotation.set( rot[0] * degreesToRadians,
						rot[1] * degreesToRadians,
						rot[2] * degreesToRadians );
	//
	scene.add( mesh );
	//
	return mesh;
};
var addFrontTextureBox = function(opts) {
	var img = THREE.ImageUtils.loadTexture( opts.front );
	img.minFilter = THREE.LinearFilter;
	var materials = [
		new THREE.MeshLambertMaterial({ color: opts.color }),
		new THREE.MeshLambertMaterial({ color: opts.color }),
		new THREE.MeshLambertMaterial({ color: opts.color }),
		new THREE.MeshLambertMaterial({ color: opts.color }),
		new THREE.MeshLambertMaterial({ color: opts.color, map: img}),
		new THREE.MeshLambertMaterial({ color: opts.color })
	];
	var mesh = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ),
								new THREE.MeshFaceMaterial( materials ) );
	opts.mesh = mesh;
	return add(opts);
};
var addFrontBackTextureBox = function(opts) {
	var front = THREE.ImageUtils.loadTexture( opts.front );
	front.minFilter = THREE.LinearFilter;
	var back = THREE.ImageUtils.loadTexture( opts.back );
	back.minFilter = THREE.LinearFilter;
	var materials = [
		new THREE.MeshLambertMaterial({ color: opts.color }),
		new THREE.MeshLambertMaterial({ color: opts.color }),
		new THREE.MeshLambertMaterial({ color: opts.color }),
		new THREE.MeshLambertMaterial({ color: opts.color }),
		new THREE.MeshLambertMaterial({ color: opts.color, map: front }),
		new THREE.MeshLambertMaterial({ color: opts.color, map: back})
	];
	var mesh = new THREE.Mesh( new THREE.BoxGeometry( 1, 1, 1 ),
								new THREE.MeshFaceMaterial( materials ) );
	opts.mesh = mesh;
	return add(opts);
};
var addJoint = function(opts) {
	var joint = null,
		opacity = opts.opacity || 1,
		color = opts.color || 0X00FF00,
		pos1 = opts.pos1 || [0,0,0],
		pos2 = opts.pos2 || [0,0,0],
	//
	geo = new THREE.Geometry();
	geo.vertices.push( new THREE.Vector3( pos1[0], pos1[1], pos1[2] ) );
	geo.vertices.push( new THREE.Vector3( pos2[0], pos2[1], pos2[2] ) );
	joint = new THREE.Line( geo,
							new THREE.LineBasicMaterial({ color: color, opacity: opacity }),
							THREE.LinePieces );
	//
	scene.add( joint );
	return joint;
};
var animate = function() {
	if (controls) {
		controls.update();	
	}
	if (renderer) {
		renderer.render(scene, camera);
	}
};
var create = function(opts) {
	var type = opts.type || 'box',
		mesh = null;
	switch(type) {
		case 'box':
			mesh = createBox(opts);
			break;
		case 'jointBall':
		case 'jointDistance':
		case 'jointHinge':
		case 'jointWheel':
			mesh = addJoint(opts);
			break;
		default:
			console.warn('stage.utils :: create :: this type has not been added: ' + type);
			break;
	}
	return mesh;
};
var createBox = function(opts) {
	var color = opts.color || 0xFFFFFF,
		name = opts.name || 'box',
		geometry = new THREE.BufferGeometry(),
		mesh = null;
	//
	geometry.fromGeometry( new THREE.BoxGeometry(1,1,1));
	mesh = new THREE.Mesh( geometry,
						new THREE.MeshLambertMaterial({
							name: name,
							color: color
						})
					);
	//
	opts.mesh = mesh;
	return add(opts);
};
var render = function(opts) {
	element = this.element = opts.element;

	// camera
	camera = this.camera = new THREE.PerspectiveCamera(45, element.offsetWidth / element.offsetHeight, 1, 1000);
	camera.position.z = 180;
	camera.position.y = 0;
	camera.position.x = 0;

	// scene
	scene = this.scene = new THREE.Scene();

	// lights
	var light = new THREE.DirectionalLight(0xFFFFFF);
	light.position.set(0, 500, 500);
	scene.add(light);
	light = new THREE.AmbientLight( 0xAAAAAA );
	scene.add(light);

	// renderer
	renderer = this.renderer = new THREE.WebGLRenderer({
		preserveDrawingBuffer: true,
		alpha: true,
		antialias: true,
		canvas: element
	});
	renderer.setSize(element.offsetWidth, element.offsetHeight);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setClearColor(0x000000, 0);

	// world
	world = this.world = new OIMO.World();

	if (__DEV__) {
		// controls
		controls = this.controls = new THREE.TrackballControls(camera);
		controls.rotateSpeed = 1.0;
		controls.zoomSpeed = 1.2;
		controls.panSpeed = 0.8;
		controls.noZoom = false;
		controls.noPan = false;
		controls.staticMoving = true;
		controls.dynamicDampingFactor = 0.3;
		controls.keys = [65, 83, 68];
		controls.addEventListener('change', () => { renderer.render(scene, camera); });
	}
	
};
var resize = function(element) {
	renderer.setSize(element.offsetWidth, element.offsetHeight);
	camera.aspect = element.offsetWidth / element.offsetHeight;
	camera.updateProjectionMatrix();
};
var step = function() {
	if (world) {
		world.step();
	}
};

export default {
	degreesToRadians: degreesToRadians,
	radiansToDegrees: radiansToDegrees,
	element: element,
	scene: scene,
	camera: camera,
	world: world,
	//
	add: add,
	addFrontBackTextureBox: addFrontBackTextureBox,
	addFrontTextureBox: addFrontTextureBox,
	create: create,
	//
	animate: animate,
	render: render,
	resize: resize,
	step: step
};