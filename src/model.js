import image from './assets/image.png'
import { TitleBlock, ImageBlock, ColumnsBlock, TextBlock } from './classes/blocks'


export const model = [
    new TitleBlock(
        'Website constructor',
        {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(to right, #ff0099, #493240)',
                color: '#fff',
                'text-align': 'center',
                padding: '1.5rem',
            }
        }
    ),

    new ImageBlock(
        image,
        {
            styles: {
                padding: '2rem 0',
                display: 'flex',
                'justify-content': 'center',
            },
            imageStyles: {
                width: '500px',
                height: 'auto',
            },
            alt: 'This is a picture'
        }
    ),

    new ColumnsBlock(
        [
            '1111111',
            '2222222',
            '3333333',
        ],
        {
            tag: 'p',
            styles: {
                background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
                padding: '2rem',
                color: '#fff',
                'font-weight': 'bold',
            }
        }
    ),

    new TextBlock(
        'Some text',
        {
            tag: 'p',
            styles: {
                background: 'linear-gradient(to left, #f2994a, #f2c94c)',
                paddign: '1rem',
                'font-weight': 'bold',
            }
        }
    )
]