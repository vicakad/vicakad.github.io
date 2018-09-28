module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.LoadNpmTasks("grunt-sass");
    grunt.initConfig({
        sass: {
            style: {
                files:{
                    "css/style.css": "sass/style.scss"
                }
            }
        }
    });
};