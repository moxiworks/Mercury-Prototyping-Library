import React, { Component } from 'react';
import FolderIcon from '../../images/folder-icon.svg'
import FileIcon from '../../images/file-icon.svg'
import Label from '../Label/Label';
import './Files.scss'
class Files extends Component {
  
    state = {
        open: false
      }
    toggleFile=()=>{
        this.setState(({ open }) => ({ open: !open }));
    }

    render() { 
        return ( 
            <div className={this.state.open ? 'fileWrapperOpen fileWrapper' : 'fileWrapper'}>
                <Label text="Click on folder icon to open"/>
                <div className='tableRow' onClick={()=>this.toggleFile()}>
                    <div className='folderIcon' >
                        <img src={FolderIcon} alt="Folder"/>
                        <div className={this.state.open ? 'fileOpen fileCover' : 'fileCover'}></div>
                    </div>
                    <div className='textName'>My Folder</div>
                </div>

                {this.state.open ? 
                <div className={this.state.open ? 'tableRow secondRow openRow' : 'tableRow secondRow'}>
                    <div className='arrowIcon'></div>
                    <div className='fileIcon' >
                        <img src={FileIcon} alt="File"/>
                    </div>
                    <div className='textNameFile'>My File</div>
                </div>
                :null}

                <div className='tableRow'>
                    <div className='folderIcon' >
                        <img src={FileIcon} alt="File"/>
                        
                    </div>
                    <div className='textName'>My File</div>
                </div>


            </div>
         );
    }
}
 
export default Files;