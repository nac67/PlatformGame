var Player = function () {
    this.film = Content.getFilm("images/blueguy.png");
    this.filmFlip = Content.getFilm("images/blueguyFlip.png");
    this.prevVx = 0;
    this.flip = false;
}

Player.prototype = new Character();

Player.prototype.getFrame = function (prevFlip) {
    // 0 standing
    // 1 running
    // 2 sliding to slow down horizontally
    // 3 jump up
    // 4 fall down
    // 5 wall press on ground
    // 6 wall press while sliding down/up wall (pressed)
    // 7 wall jump
    // 8 brush top

    if (this.touchBottom) {
        if (this.touchRight) {
            return [5,false];
        }
        if (this.touchLeft) {
            return [5,true];
        }
        if (this.vx === 0) {
            return [0,prevFlip];
        }
        var accel = this.vx - this.prevVx;
        if (this.vx > 0 && accel >= 0) {
            return [1,false]
        }
        if (this.vx < 0 && accel <= 0) {
            return [1,true];
        }

        if (this.vx > 0 && accel < 0) {
            return [2,false];
        }

        if (this.vx < 0 && accel > 0) {
            return [2,true];
        }

    } else {

        var velBased = prevFlip;
        if (this.vx > 0) {
            velBased = false;
        }
        if (this.vx < 0) {
            velBased = true;
        }

        if (this.touchTop) {
            return [8,velBased];
        }
        if (this.wallJumpTimer < PLAYER_WALL_JUMP_LOCK) {
            return [7,velBased];
        }
        if (this.touchRight && this.wallPress) {
            return [6,false];
        }
        if (this.touchLeft && this.wallPress) {
            return [6,true];
        }
        if (this.vy <= 0) {
            return [3,velBased];
        } else {
            return [4,velBased];
        }
    }
}

Player.prototype.draw = function () {
    var frameInfo = this.getFrame(this.flip);
    var frame = frameInfo[0];
    this.flip = frameInfo[1];
    this.prevVx = this.vx;


    if (!this.flip) {
        this.film.draw(frame, (this.x*TILE) - 5, this.y*TILE);
    } else {
       this.filmFlip.draw(frame, (this.x*TILE) - 5, this.y*TILE); 
    }
}