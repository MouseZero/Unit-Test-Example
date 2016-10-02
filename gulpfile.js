'use strict'
const gulp = require('gulp')
const mocha = require('gulp-mocha')
const gutil = require('gulp-util')

gulp.task('mocha', () => {
  return gulp.src(['test/*.js'], {read: false})
  .pipe(mocha({reporter: 'nyan'}))
  .on('error', gutil.log)
})

gulp.task('watch-mocha', () => {
  gulp.run('mocha')
  gulp.watch(['./**/*.js'], ['mocha'])
})

gulp.task('default', ['watch-mocha'])
