class Gradient {

    constructor(options) {
        this.gradientBlock = document.querySelector('.gradient-block')
        
        this.colorLeftInput = document.querySelector('.color-left-input')
        this.colorRightInput = document.querySelector('.color-right-input')
        this.rangeDeg = document.querySelector('.range-deg')
        this.textDeg = document.querySelector('.text-deg')
        this.cssText = document.querySelector('.css-text')
        this.gradientText = document.querySelector('.gradient-text')
        this.copyBtn = document.querySelector('.copy-btn')

        this.copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(this.cssCopyText)
            .then(() => {
                alert('CSS скопирован')
            }) 
        })

        this.randomColorLeft = document.querySelector('.random-color-left')
        this.randomColorRight = document.querySelector('.random-color-right')

        this.gradientBlock.style.width = options.width
        this.gradientBlock.style.height = options.height
        this.renderBg(this.rangeDeg.value, this.colorLeftInput.value, this.colorRightInput.value)
        this.gradientBlock.innerHTML = '<h2>' + this.gradientText.value + '</h2>'
        this.listenerLeftColorInput()
        this.listenerRightColorInput()
        this.listenerRangeDeg()
        this.animDeg()
        this.randomColorLeftLis()
        this.randomColorRightLis()

        this.gradientText.addEventListener('input', () => {
            this.gradientBlock.innerHTML = '<h2>' + this.gradientText.value + '</h2>'
        })
    }


    listenerLeftColorInput() {
        this.colorLeftInput.addEventListener('input', () => {
            this.renderBg(this.rangeDeg.value, this.colorLeftInput.value, this.colorRightInput.value)
        })
    }

    listenerRightColorInput() {
        this.colorRightInput.addEventListener('input', () => {
            this.renderBg(this.rangeDeg.value, this.colorLeftInput.value, this.colorRightInput.value)
        })
    }

    listenerRangeDeg() {
        this.rangeDeg.addEventListener('input', () => {
            this.renderBg(this.rangeDeg.value, this.colorLeftInput.value, this.colorRightInput.value)
        })
    }


    randomColorLeftLis() {
        this.randomColorLeft.addEventListener('click', () => {
            let color = '#'+this.randomColor();
            this.renderBg(this.rangeDeg.value, color, this.colorRightInput.value)
            this.colorLeftInput.value = color
        })
    }

    randomColorRightLis() {
        this.randomColorRight.addEventListener('click', () => {
            let color = '#'+this.randomColor();
            this.renderBg(this.rangeDeg.value, this.colorLeftInput.value, color)
            this.colorRightInput.value = color
        })
    }



    renderBg(deg, leftColor, rightColor) {
        this.cssCopyText = `background: linear-gradient(${deg}deg, ${leftColor}, ${rightColor});`
        this.css = `<span style="color:#608efb">background:</span> 
        <span style="color:#26ba89">linear-gradient(</span><span style="color:#f25454">${deg}deg,</span>
        <span style="color:#ea811f"> ${leftColor}, ${rightColor}</span><span style="color:#26ba89">);</span>`
        this.gradientBlock.style.background = `linear-gradient(${deg}deg, ${leftColor}, ${rightColor})`

        this.cssText.innerHTML = '<i class="bi bi-filetype-css text-light"></i> ' + this.css
        this.textDeg.innerHTML = `Угол ${deg}&deg;`
    }


    animDeg() {
        let i = 0
        let interval = setInterval(() => {
            i = i + 1
            if (i <= 120) {
                this.gradientBlock.style.background = `linear-gradient(${i}deg, ${this.colorLeftInput.value}, ${this.colorRightInput.value})`
                this.rangeDeg.value = i
                this.textDeg.innerHTML = `Угол ${i}&deg;`
                this.renderBg(i, this.colorLeftInput.value, this.colorRightInput.value)
            } else {
                clearInterval(interval)
            }
        }, 30)
    }


    randomColor() {
        let hex = Math.floor(Math.random() * 0xffffff).toString(16)

        if (hex.length == 6) {
            return hex
        } else {
            return hex + '4'
        }
    }


}


