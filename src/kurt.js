var utils,
    bodys = [],
    meshs = [],
    lines = [],
    joints = [],
    controlBar,
    theWall,
    head,
    torso,
    leftArm,
    leftHand,
    rightArm,
    rightHand,
    leftThigh,
    leftLeg,
    rightThigh,
    rightLeg,
    folder = 'santa-claus/';

var render = function render(opts) {
    utils = opts.utils;
    renderElements(opts);
    renderJoints();
};
var renderElements = function renderElements(opts) {
    var origin = opts.origin || {
            x: 0,
            y: 50,
            z: 0,
        };
    // control bar
    controlBar = {
        size: [100, 2, 200],
        pos: [origin.x + 0, origin.y + 200, origin.z + 0],
        world: utils.world,
        name: 'control-bar',
        move: true,
        color: '#FFAA58'
    };
    bodys.push(new OIMO.Body(controlBar));
    meshs.push(utils.create(controlBar));
    // the wall
    theWall = {
        size: [400, 100, 1],
        pos: [origin.x + 0, origin.y - 160, origin.z + 2],
        world: utils.world,
        name: 'the-wall',
        move: false
    };
    bodys.push(new OIMO.Body(theWall));
    meshs.push(utils.create(theWall));
    // head
    head = {
        size: [30, 40, 2],
        pos: [origin.x + 0, origin.y - 10, origin.z + 20],
        world: utils.world,
        name: 'head',
        move: true,
        front: './models/' + folder + 'head.jpg',
        color: '#FFFFFF'
    };
    bodys.push(new OIMO.Body(head));
    meshs.push(utils.addFrontTextureBox(head)); 
    // torso
    torso = {
        size: [60, 70, 2],
        pos: [origin.x + 0, origin.y - 60, origin.z - 10],
        world: utils.world,
        name: 'torso',
        move: true,
        front: './models/' + folder + 'torso.jpg',
        color: '#FFFFFF'
    };
    bodys.push(new OIMO.Body(torso));
    meshs.push(utils.addFrontTextureBox(torso));
    // right arm
    rightArm = {
        size: [20, 10, 2],
        pos: [origin.x - 50, origin.y - 30, origin.z + 0],
        world: utils.world,
        name: 'right-arm',
        move: true,
        front: './models/' + folder + 'right-arm.jpg',
        back: './models/' + folder + 'right-arm-back.jpg',
        color: '#FFFFFF'
    };
    bodys.push(new OIMO.Body(rightArm));
    meshs.push(utils.addFrontBackTextureBox(rightArm));
    // right hand
    rightHand = {
        size: [25, 15, 1],
        pos: [origin.x - 90, origin.y - 30, origin.z + 0],
        world: utils.world,
        name: 'right-hand',
        move: true,
        front: './models/' + folder + 'right-hand.jpg',
        back: './models/' + folder + 'right-hand-back.jpg',
        color: '#FFFFFF'
    };
    bodys.push(new OIMO.Body(rightHand));
    meshs.push(utils.addFrontBackTextureBox(rightHand));
    // left arm
    leftArm = {
        size: [20, 10, 2],
        pos: [origin.x + 50, origin.y - 30, origin.z + 0],
        world: utils.world,
        name: 'left-arm',
        move: true,
        front: './models/' + folder + 'left-arm.jpg',
        back: './models/' + folder + 'left-arm-back.jpg',
        color: '#FFFFFF'
    };
    bodys.push(new OIMO.Body(leftArm));
    meshs.push(utils.addFrontBackTextureBox(leftArm));
    // left hand
    leftHand = {
        size: [25, 15, 1],
        pos: [origin.x + 90, origin.y - 30, origin.z + 0],
        world: utils.world,
        name: 'left-hand',
        move: true,
        front: './models/' + folder + 'left-hand.jpg',
        back: './models/' + folder + 'left-hand-back.jpg',
        color: '#FFFFFF'
    };
    bodys.push(new OIMO.Body(leftHand));
    meshs.push(utils.addFrontBackTextureBox(leftHand));
    // right thigh
    rightThigh = {
        size: [20, 30, 2],
        pos: [origin.x - 10, origin.y - 130, origin.z + 0],
        world: utils.world,
        name: 'right-thigh',
        move: true,
        front: './models/' + folder + 'right-thigh.jpg',
        color: '#FFFFFF'
    };
    bodys.push(new OIMO.Body(rightThigh));
    meshs.push(utils.addFrontTextureBox(rightThigh));
    // right leg
    rightLeg = {
        size: [10, 40, 2],
        pos: [origin.x - 10, origin.y - 180, origin.z + 0],
        world: utils.world,
        name: 'right-leg',
        move: true
    };
    bodys.push(new OIMO.Body(rightLeg));
    meshs.push(utils.create(rightLeg));
    // left thigh
    leftThigh = {
        size: [20, 30, 2],
        pos: [origin.x + 10, origin.y - 130, origin.z + 0],
        world: utils.world,
        name: 'left-thigh',
        move: true,
        front: './models/' + folder + 'right-thigh.jpg',
        color: '#FFFFFF'
    };
    bodys.push(new OIMO.Body(leftThigh));
    meshs.push(utils.addFrontTextureBox(leftThigh));
    // left leg
    leftLeg = {
        size: [10, 40, 2],
        pos: [origin.x + 10, origin.y - 180, origin.z + 0],
        world: utils.world,
        name: 'left-leg',
        move: true
    };
    bodys.push(new OIMO.Body(leftLeg));
    meshs.push(utils.create(leftLeg));
};
var renderJoints = function renderJoints() {
    var baseDistance = 120;
    // joints
    // control-bar-head
    var obj = {
        world: utils.world,
        type: 'jointDistance',
        body1: 'control-bar',
        body2: 'head',
        pos1: [20, 0, 0],
        pos2: [0, (head.size[1] / 2), 0],
        axe1: [1, 1, 1],
        axe2: [1, 1, 1],
        collision: true,
        min: 10,
        max: baseDistance + 100,
        spring: [10, 10],
        name: 'control-bar-head',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // head-torso-1
    obj = {
        world: utils.world,
        type: 'jointHinge',
        body1: 'head',
        body2: 'torso',
        pos1: [-5, 2, -1],
        pos2: [-6, (torso.size[1] / 2), 1],
        axe1: [0, 1, 0],
        axe2: [0, 1, 0],
        collision: true,
        min: 3,
        max: 6,
        spring: [1, 0.2],
        name: 'head-torso-1',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    /*
    // head-torso-2
    obj = {
        world: utils.world,
        type: 'jointDistance',
        body1: 'head',
        body2: 'torso',
        pos1: [5, 5, -1],
        pos2: [6, (torso.size[1] / 2), 1],
        axe1: [0, 1, 0],
        axe2: [0, 1, 0],
        collision: true,
        min: 3,
        max: 6,
        spring: [10, 0.2],
        name: 'head-torso-2',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    */
    // torso-right-arm
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'torso',
        body2: 'right-arm',
        pos1: [-(torso.size[0] / 2) + 7, ((torso.size[1] / 2) / 2) - 1, 2],
        pos2: [(rightArm.size[0] / 2) - 4 , 2, -2],
        axe1: [0, 1, 0],
        axe2: [1, 0, 1],
        collision: true,
        min: 2,
        max: 3,
        name: 'torso-right-arm',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // right-arm-right-hand-1
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'right-arm',
        body2: 'right-hand',
        pos1: [-(rightArm.size[0] / 2), -2, 0],
        pos2: [(rightHand.size[0] / 2), -2, 0],
        collision: true,
        name: 'right-arm-right-hand-1',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // right-arm-right-hand-2
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'right-arm',
        body2: 'right-hand',
        pos1: [-(rightArm.size[0] / 2), 2, 0],
        pos2: [(rightHand.size[0] / 2), 2, 0],
        collision: true,
        name: 'right-arm-right-hand-2',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // control-bar-right-hand
    obj = {
        world: utils.world,
        type: 'jointDistance',
        body1: 'control-bar',
        body2: 'right-hand',
        pos1: [0, 0, -90],
        pos2: [-(rightHand.size[0] / 2), (rightHand.size[1] / 2), 0],
        collision: true,
        min: 10,
        max: baseDistance + 120,
        spring: [3, 1],
        name: 'control-bar-right-hand',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // torso-left-arm
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'torso',
        body2: 'left-arm',
        pos1: [(torso.size[0] / 2) - 7, ((torso.size[1] / 2) / 2) - 1, 2],
        pos2: [-(leftArm.size[0] / 2) + 3 , 2, -2],
        axe1: [0, 1, 0],
        axe2: [1, 0, 1],
        collision: true,
        min: 2,
        max: 3,
        name: 'torso-left-arm',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // left-arm-left-hand-1
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'left-arm',
        body2: 'left-hand',
        pos1: [(leftArm.size[0] / 2), -2, 0],
        pos2: [-(leftHand.size[0] / 2), -2, 0],
        collision: true,
        name: 'left-arm-left-hand-1',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // left-arm-left-hand-2
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'left-arm',
        body2: 'left-hand',
        pos1: [(leftArm.size[0] / 2), 2, 0],
        pos2: [-(leftHand.size[0] / 2), 2, 0],
        collision: true,
        name: 'left-arm-left-hand-2',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // control-bar-left-hand
    obj = {
        world: utils.world,
        type: 'jointDistance',
        body1: 'control-bar',
        body2: 'left-hand',
        pos1: [0, 0, 90],
        pos2: [(leftHand.size[0] / 2), (leftHand.size[1] / 2), 0],
        collision: true,
        min: 10,
        max: baseDistance + 120,
        spring: [3, 1],
        name: 'control-bar-left-hand',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // torso-right-thigh-1
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'torso',
        body2: 'right-thigh',
        pos1: [-((torso.size[0] / 2) / 2) - 1 + 5, -(torso.size[1] / 2), 0],
        pos2: [-1, (rightThigh.size[1] / 2), 0],
        collision: true,
        name: 'torso-right-thigh-1',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // torso-right-thigh-2
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'torso',
        body2: 'right-thigh',
        pos1: [-((torso.size[0] / 2) / 2) + 1 + 5, -(torso.size[1] / 2), 0],
        pos2: [1, (rightThigh.size[1] / 2), 0],
        collision: true,
        name: 'torso-right-thigh-2',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // torso-left-thigh-1
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'torso',
        body2: 'left-thigh',
        pos1: [((torso.size[0] / 2) / 2) - 1 -5, -(torso.size[1] / 2), 0],
        pos2: [-1, (leftThigh.size[1] / 2), 0],
        collision: true,
        name: 'torso-left-thigh-1',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // torso-left-thigh-2
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'torso',
        body2: 'left-thigh',
        pos1: [((torso.size[0] / 2) / 2) + 1 - 5, -(torso.size[1] / 2), 0],
        pos2: [1, (leftThigh.size[1] / 2), 0],
        collision: true,
        name: 'torso-left-thigh-2',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // right-thigh-right-leg-1
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'right-thigh',
        body2: 'right-leg',
        pos1: [1, -(rightThigh.size[1] / 2) - 2, 0],
        pos2: [1, (rightLeg.size[1] / 2) + 2, 0],
        collision: true,
        name: 'right-thigh-right-leg-1',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // right-thigh-right-leg-2
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'right-thigh',
        body2: 'right-leg',
        pos1: [-1, -(rightThigh.size[1] / 2) - 2, 0],
        pos2: [-1, (rightLeg.size[1] / 2) + 2, 0],
        collision: true,
        name: 'right-thigh-right-leg-2',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // left-thigh-left-leg-1
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'left-thigh',
        body2: 'left-leg',
        pos1: [1, -(leftThigh.size[1] / 2) - 2, 0],
        pos2: [1, (leftLeg.size[1] / 2) + 2, 0],
        collision: true,
        name: 'left-thigh-left-leg-1',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // left-thigh-left-leg-2
    obj = {
        world: utils.world,
        type: 'jointBall',
        body1: 'left-thigh',
        body2: 'left-leg',
        pos1: [-1, -(leftThigh.size[1] / 2) - 2, 0],
        pos2: [-1, (leftLeg.size[1] / 2) + 2, 0],
        collision: true,
        name: 'left-thigh-left-leg-2',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // left-leg-the-wall
    obj = {
        world: utils.world,
        type: 'jointDistance',
        body1: 'left-leg',
        body2: 'the-wall',
        pos1: [0, -(leftLeg.size[1] / 2), 2],
        pos2: [10, -(theWall.size[1] / 2) + 30, -2],
        collision: true,
        min: 20,
        max: 25,
        spring: [10, 1],
        name: 'left-leg-the-wall',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // right-leg-the-wall
    obj = {
        world: utils.world,
        type: 'jointDistance',
        body1: 'right-leg',
        body2: 'the-wall',
        pos1: [0, -(rightLeg.size[1] / 2), 2],
        pos2: [-10, -(theWall.size[1] / 2) + 30, -2],
        collision: true,
        min: 20,
        max: 25,
        spring: [10, 1],
        name: 'right-leg-the-wall',
        color: '#FFAA58'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    /*
    // control-bar-left-thigh
    obj = {
        world: utils.world,
        type: 'jointDistance',
        body1: 'control-bar',
        body2: 'left-thigh',
        pos1: [-30, 0, 40],
        pos2: [0, -14, 1],
        collision: true,
        min: 10,
        max: baseDistance + 260,
        spring: [10, 1],
        name: 'control-bar-left-thigh'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    // control-bar-right-thigh
    obj = {
        world: utils.world,
        type: 'jointDistance',
        body1: 'control-bar',
        body2: 'right-thigh',
        pos1: [-30, 0, -40],
        pos2: [0, -14, 1],
        collision: true,
        min: 10,
        max: baseDistance + 260,
        spring: [10, 1],
        name: 'control-bar-right-thigh'
    };
    joints.push(new OIMO.Link(obj));
    lines.push(utils.create(obj));
    */
};
var step = function step(data) {
    var alpha = ((data.orientation.alpha !== null) ? data.orientation.alpha : 90),
        beta = ((data.orientation.beta !== null) ? data.orientation.beta : 0),
        gamma = ((data.orientation.gamma !== null) ? data.orientation.gamma : 0),
        newRotation;

    // some constraints:
    // alpha goes ahead
    /*
    alpha = alpha;
    // beta max && min
    beta = Math.min(Math.max(beta, -85), 85);
    // gamma max && min
    gamma = Math.min(Math.max(gamma, -85), 85);
    */

    //console.log(alpha, beta, gamma, data);
    //
    newRotation = new THREE.Quaternion().setFromEuler(
                                new THREE.Euler(
                                    beta * utils.degreesToRadians,
                                    alpha * utils.degreesToRadians,
                                    gamma * utils.degreesToRadians,
                                    "XYZ"
                                )
                            );
    meshs[0].quaternion.copy(newRotation);
    bodys[0].setQuaternion(meshs[0].quaternion);
    // control bar back to top
    bodys[0].setPosition(meshs[0].position);

    // puppet
    meshs.forEach(function(mesh, index) {
        meshs[index].position.copy(bodys[index].getPosition());
        meshs[index].quaternion.copy(bodys[index].getQuaternion());
    });

    // joints
    joints.forEach(function(joint, index) {
        var pos = joint.getPosition();
        lines[index].geometry.vertices[0].copy(pos[0]);
        lines[index].geometry.vertices[1].copy(pos[1]);
        lines[index].geometry.verticesNeedUpdate = true;
    });
};

export default {
    render: render,
    step: step
};