import React, { Component } from 'react';
import CloseButton from '../CloseButton/CloseButton';
import './ImageUpload.scss'
import ImageIcon from '../../images/down-arrow.svg'

let intervalTimer
class ImageUpload extends Component {
    constructor(props) {
        super(props);
        this.imgRef = React.createRef();
        this.inputRef = React.createRef();
    }
    state = { 
        dragOver: false,
        title: 'Click to upload',
        subtext: 'Or simply drag and drop',
        file: false,
        uploadAmount: 0,
        progress: 0
     }
    dragOver=()=>{
        this.setState({
            dragOver: true
        })
    }
    dragExit=()=>{
        this.setState({
            dragOver: false
        })
    }

    gotFile=(e)=>{
        let file = e.target.files[0]; 
        if(!file){return}

        let uploadAmount
        clearInterval(intervalTimer)
        this.setState({
            dragOver: false,
            uploadAmount: 0,
            progress: 0
        },()=>{
                let fileType = file.type.split('/')[0]
                if(fileType==='image'){
                    this.setState({
                        file: true
                    })
                    let imageUrl =  URL.createObjectURL(file)
                    this.imgRef.current.src=imageUrl
        
                    let intervalTimer = setInterval(() => {
                        uploadAmount = this.state.uploadAmount+1
                        if(uploadAmount<=100){
                            this.setState({
                                uploadAmount: uploadAmount,
                                progress: uploadAmount+'%'
                            })
                        }else{
                            clearInterval(intervalTimer)
                            setTimeout(() => {
                                this.setState({
                                    progress: 0+'%'
                                })
                            }, 500);
                            
                        }
                    }, 80);
                }
        })
    }

    clearImage=()=>{
        clearInterval(intervalTimer)
        this.inputRef.current.value=''
        this.setState({
            dragOver: false,
            uploadAmount: 0,
            progress: 0,
            file: false
        })
    }
    

    render() { 
        return (
            <div className={this.state.dragOver ? 'imageUploadOver imageUpload' : 'imageUpload'} 
                onDragEnter={()=>this.dragOver()} 
                onDragLeave={()=>this.dragExit()}
            >
                <div className='uploadContent'>
                    <div className='iconArea'>
                        <img src={ImageIcon} alt="Upload"/>
                    </div>
                    <div className='title'>{this.state.title}</div>
                    <div className='subtext'>{this.state.subtext}</div>
                </div>

                <div className={this.state.file ? 'previewImage' : 'previewImage previewImageHide'}>
                    <img src="" alt="preview" ref={this.imgRef}/>

                    <div className={this.state.uploadAmount < 100 ? 'uploadProgress': 'uploadProgress hideProgress'}>
                        <div className='uploadInner'>
                            <div className='progressBar'>
                                <div className='progressBarAmount' style={{width: this.state.progress}}></div>
                            </div>
                            <div className='progressText'>{this.state.uploadAmount}%</div>
                        </div>
                    </div>

                </div>
                <input type="file" ref={this.inputRef} title="" className='fileUpload' onChange={(e)=>this.gotFile(e)} accept="image/png, image/gif, image/jpeg, image/webp" />

                {this.state.file ?
                <CloseButton onClick={()=>this.clearImage()}/>
                :null}

            </div>
          );
    }
}
 
export default ImageUpload;