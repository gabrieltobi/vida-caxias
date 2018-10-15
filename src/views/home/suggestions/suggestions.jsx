import './suggestions.scss'

import React, { Component } from 'react'

class Suggestions extends Component {
    suggestions = [
        { src: 'https://picsum.photos/200/300?random', label: 'Vive Só' },
        { src: 'https://picsum.photos/300/380?random', label: 'Depressivo' },
        { src: 'https://picsum.photos/300/400?random', label: 'Sem Amigos' },
        { src: 'https://picsum.photos/210/220?random', label: 'Casamento Infeliz' },
        { src: 'https://picsum.photos/400/320?random', label: 'Doente' },
        { src: 'https://picsum.photos/320/220?random', label: 'Desesperado' },
        { src: 'https://picsum.photos/250/520?random', label: 'Infeliz' },
        { src: 'https://picsum.photos/360/250?random', label: 'Não Vê Solução (Clicável)', href: 'http://novotempo.com/' },
        { src: 'https://www.youtube.com/embed/am-XJqRU3uY', label: 'Vídeo 📹', video: true }
    ]

    openPage = (href) => {
        if (href) {
            window.open(href, '_blank')
        }
    }

    renderSuggestion = (item, index) => {
        return (
            <React.Fragment key={index}>
                <div className='col-lg-4 col-md-6 col-xs-12'>
                    <div className={`suggestion bg-light p-2 shadow my-3 ${item.href ? 'clickable' : ''}`}
                        onClick={() => this.openPage(item.href)}>
                        <h5>{item.label}</h5>
                        <div className='suggestion-content border border-dark position-relative'>
                            {
                                item.video &&
                                <div className='suggestion-video embed-responsive embed-responsive-16by9 h-100'>
                                    <iframe className='embed-responsive-item' src={item.src} allowFullScreen></iframe>
                                </div>
                            }
                            {
                                !item.video &&
                                <div className='suggestion-image h-100' style={{ backgroundImage: `url(${item.src})` }} />
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        return (
            <div className='suggestions py-4 px-5'>
                <h1 className='mb-4 text-center py-3 bg-dark text-light'>Você Recebeu o Livro</h1>

                <div className='row'>
                    {this.suggestions.map(this.renderSuggestion)}
                </div>
            </div>
        )
    }
}

export default Suggestions