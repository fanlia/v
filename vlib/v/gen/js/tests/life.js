// V_COMMIT_HASH 0de70e8
// V_CURRENT_COMMIT_HASH 1c2dbea
// Generated by the V compiler

"use strict";

const _CONSTS = Object.freeze({
	/** @type {number} - w */
	w: 	30,
	/** @type {number} - h */
	h: 30
});

/** @namespace builtin */
const builtin = (function () {
	/**
	 * @param {any} s
	 * @returns {void}
	 * @function
	*/
	function println(s) {
		console.log(s);
	}
	
	/**
	 * @param {any} s
	 * @returns {void}
	 * @function
	*/
	function print(s) {
		process.stdout.write(s);
	}

	/* module exports */
	return {
		println,
		print,
	};
})();

/** @namespace main */
const main = (function () {
	/**
	 * @returns {void}
	 * @function
	*/
	function clear() {
		console.clear();
	}
	
/**
	 * @param {boolean[]} game
	 * @param {number} x
	 * @param {number} y
	 * @returns {boolean}
	 * @function
	*/
	function get(game, x, y) {
		if (y < 0 || x < 0) {
			return false;
		}
		
		if (y >= _CONSTS.h || x >= _CONSTS.w) {
			return false;
		}
		
		return game[y][x];
	}
	
	/**
	 * @param {boolean[]} game
	 * @param {number} x
	 * @param {number} y
	 * @returns {number}
	 * @function
	*/
	function neighbours(game, x, y) {
		/** @type {number} - count */
		let count = 0;
		if (get(game, x - 1, y - 1)) {
			count++;
		}
		
		if (get(game, x, y - 1)) {
			count++;
		}
		
		if (get(game, x + 1, y - 1)) {
			count++;
		}
		
		if (get(game, x - 1, y)) {
			count++;
		}
		
		if (get(game, x + 1, y)) {
			count++;
		}
		
		if (get(game, x - 1, y + 1)) {
			count++;
		}
		
		if (get(game, x, y + 1)) {
			count++;
		}
		
		if (get(game, x + 1, y + 1)) {
			count++;
		}
		
		return count;
	}
	
	/**
	 * @param {boolean[]} game
	 * @returns {boolean[]}
	 * @function
	*/
	function step(game) {
		/** @type {boolean[]} - new_game */
		let new_game = [[]];
		for (let y = 0; y < game.length; ++y) {
			let row = game[y];
			/** @type {boolean[]} - new_row */
			let new_row = [];
			new_game[y] = new_row;
			for (let x = 0; x < row.length; ++x) {
				let cell = row[x];
				/** @type {number} - count */
				const count = neighbours(game, x, y);
				new_row[x] = cell && count === 2 || count === 3;
			}
			
		}
		
		return new_game;
	}
	
	/**
	 * @param {boolean[]} row
	 * @returns {string}
	 * @function
	*/
	function row_str(row) {
		/** @type {string} - str */
		let str = "";
		for (let _tmp1 = 0; _tmp1 < row.length; ++_tmp1) {
			let cell = row[_tmp1];
			if (cell) {
				str += "◼ ";
			} else {
				str += "◻ ";
			}
			
		}
		
		return str;
	}
	
	/**
	 * @param {boolean[]} game
	 * @returns {void}
	 * @function
	*/
	function show(game) {
		clear();
		for (let _tmp2 = 0; _tmp2 < game.length; ++_tmp2) {
			let row = game[_tmp2];
			builtin.println(row_str(row));
		}
		
	}
	
	/* program entry point */
	(function() {
		/** @type {boolean[]} - game */
		let game = [[]];
		for (let y = 0; y < _CONSTS.h; ++y) {
			/** @type {boolean[]} - row */
			let row = [];
			for (let x = 0; x < _CONSTS.w; ++x) {
				row[x] = false;
			}
			
			game[y] = row;
		}
		
		game[11][15] = true;
		game[11][16] = true;
		game[12][16] = true;
		game[10][21] = true;
		game[12][20] = true;
		game[12][21] = true;
		game[12][22] = true;
		setInterval(function () {
			show(game);
			game = step(game);
		}, 500);
	})();

	/* module exports */
	return {};
})();


