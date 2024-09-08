/*CMPS3141-HCI - AS2-24S1
Collaborators: Amilcar Vasquez
Date: Sept.6.24
 */

import { createApp } from "https://mavue.mavo.io/mavue.js";

const app = createApp({
    data: {
            isAnimating: false,
            isBeingPassed: false,
            animationSpeed: 2, // default to 2 seconds
            cssCode: '.animate {animation: bounce 2s infinite;}',
            keyFrameCSS: '@keyframes bounce {0%, 20%, 50%, 80%, 100% {transform: translateY(0);} 40% {transform: translateY(-30px);} 60% {transform: translateY(-15px);}}',
            currentSlideIndex: 0,
            slides: [
                {
                    title: 'Let\'s Get Started!',
                    content: 'Click the "Control the ball" button to your right to start the animation.'
                },
                {
                    title: 'Great Job! How it works:',
                    content: 'The animation property is a shorthand property for: animation-name, animation-duration, animation-timing-function, animation-delay, animation-iteration-count, animation-direction, animation-fill-mode, and animation-play-state.'
                },
                {
                    title: 'Let\'s Focus on Speed!',
                    content: 'For this example, we are focusing on the animation name, duration, and iteration count. The animation name is "bounce", the duration is set by the user in seconds, and the iteration count is set to infinite. Use the slider to adjust the duration of the bounce.'
                },
                {
                    title: 'Key Frames',
                    content: 'The name "bounce" is a keyframe animation.  This is necessary for the animation to work. Keyframes hold what styles the element will have at certain times. Notice how the ball moves on the Y Axis.'
                },
                {
                    title: 'Different Key Frames',
                    content: 'Let\'s try a different keyframe animation. Click the "Pass the ball" button to your right to start the animation.  Notice how the ball moves on the X axis instead of the Y axis as in bounce.'
                },
                {
                    title: 'Great Job!',
                    content: 'You have successfully learned how to animate a football.  You can now control the speed and direction of the ball.  Keep practicing and you will be a pro in no time!'
                }
            ]
    },
    methods: {
        toggleAnimation() {
            this.isAnimating = !this.isAnimating;
            this.updateCSS();
        },
        togglePassing() {
            this.isBeingPassed = !this.isBeingPassed;
            this.updateCSS();
        },
        funTickers() {
            if (this.animationSpeed <= 1) {
                return 'Super Saiyan Speed';
            } else if (this.animationSpeed <= 2) {
                return 'Messi type skills';
            } else if (this.animationSpeed <= 3) {
                return 'You are Looking like Cristiano Ronaldo already';
            } else if (this.animationSpeed <= 4) {
                return 'You might make it to the Belize National Team';
            } else {
                return 'My grandpa is faster on the ball than you';
            }
        },
        nextSlide() {
            this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
        },
        previousSlide() {
            this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
        },
        updateCSS() {
            if (this.isBeingPassed) {
                // Update the CSS code for passing the ball
                this.cssCode = 'football.pass {animation: pass ' + this.animationSpeed + 's infinite;}';
                this.keyFrameCSS = this.keyframeCSS = `
                @keyframes pass {
                    20% { transform: translateX(220px); }
                    40% { transform: translateX(-220px); }
                }`;
            } else if (this.isAnimating) {
                // Update the CSS code for bouncing the ball
                this.cssCode = 'football.animate {animation: bounce ' + this.animationSpeed + 's infinite;}';
                this.keyFrameCSS = `
                @keyframes bounce {
                    0% { transform: translateY(0); }
                    10% { transform: translateY(-120px); }
                    20% { transform: translateY(0); }
                    30% { transform: translateY(-90px); }
                    40% { transform: translateY(0); }
                    50% { transform: translateY(-60px); }
                    60% { transform: translateY(0); }
                    70% { transform: translateY(-30px); }
                    80% { transform: translateY(0); }
                }`;
            }
            // Ensure Prism highlights the updated CSS
            this.$nextTick(() => {
                Prism.highlightAll();
            });
        }
    },
    watch: {
        animationSpeed(newSpeed) {
            this.updateCSS();
        },
    }
}).mount('#app');
