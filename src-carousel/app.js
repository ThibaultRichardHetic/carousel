class HeticCarousel
{
    constructor($container)
    {
        this.$container = $container
        
        this.setSlides()
        this.setSiblings()
    }

    setSlides()
    {
        this.slides = {}
        this.slides.index = 0
        this.slides.$items = this.$container.querySelectorAll('.slide')
    }

    setSiblings()
    {
        this.siblings = {}
        this.siblings.active = !!this.$container.dataset.siblings

        if(!this.siblings.active)
        {
            return
        }

        // Create DOM
        this.siblings.$previous = document.createElement('button')
        this.siblings.$previous.classList.add('sibling', 'previous')
        this.$container.appendChild(this.siblings.$previous)

        this.siblings.$next = document.createElement('button')
        this.siblings.$next.classList.add('sibling', 'next')
        this.$container.appendChild(this.siblings.$next)

        // Listen click events
        this.siblings.$previous.addEventListener('click', () =>
        {
            this.previous()
        })
        this.siblings.$next.addEventListener('click', () =>
        {
            this.next()
        })
    }

    previous()
    {
        let index = this.slides.index - 1

        if(index < 0)
        {
            index = this.slides.$items.length - 1
        }

        this.goTo(index)
    }

    next()
    {
        let index = this.slides.index + 1

        if(index > this.slides.$items.length - 1)
        {
            index = 0
        }

        this.goTo(index)
    }

    goTo(_index)
    {
        console.log(_index)
        this.slides.index = _index
    }
}