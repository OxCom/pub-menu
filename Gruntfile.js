module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');

    grunt.initConfig({
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/css/styles.css': 'src/styles.scss'
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/**/**/*.scss'],
                tasks: ['sass:dist'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('debug', 'Watch O_o', function () {
        grunt.task.run(['build']);
        grunt.task.run('watch');
    });
};