var WIDTH = 800;
var HEIGHT = 600;

var TILE = 30; //tile size in pixels

var PLAYER_WIDTH = 15; //in pixels
var PLAYER_HEIGHT = 25; //in pixels
var PLAYER_CAP_XVEL = .15; //maximum speed in x direction
var PLAYER_CAP_YVEL = .9; //maximum speed in x direction
var PLAYER_XACCEL = .01; //set higher than player cap xvel for instant movement
var PLAYER_YACCEL = .01; //gravity
var PLAYER_JUMP = .2;
var PLAYER_HEAD_BUMP_BOUNCE = false;
var PLAYER_WALL_JUMP_LOCK = 20;
var PLAYER_WALL_JUMP_XPOWER = .1;