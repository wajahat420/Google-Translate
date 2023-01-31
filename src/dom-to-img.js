import React from 'react';
import domtoimage from 'dom-to-image';
import DataComponent from './data.component';
import axios from 'axios';

class DomToImg extends React.Component {

    handlePdf = () => {
        var node = document.getElementById('app');

        domtoimage.toPng(node)
            .then(function (dataUrl) {
                var img = new Image();
                img.src = dataUrl;

                console.log('BLOB', dataUrl)

                // var reader = new FileReader();
                // reader.readAsBinaryString(dataUrl);
                // reader.onloadend = function () {
                //     var base64String = reader.result;
                //     console.log('Base64 String - ', base64String);

                //     // Simply Print the Base64 Encoded String,
                //     // without additional data: Attributes.
                //     // console.log('Base64 String without Tags- ',
   
                //     //     base64String.substr(base64String.indexOf(', ') + 1));
                // }

                // const data = Buffer.from(dataUrl)
                axios.post('http://localhost:5000/uploadBase64', {
                    b64: dataUrl
                })
                // console.log('data', data);
                document.body.appendChild(img);
            })
            .catch(function (error) {
                console.error('oops, something went wrong!', error);
            });
    }

    render() {
        return (
            <div>
                {/* <DataComponent ref={(response) => (this.componentRef = response)} /> */}
                <button onClick={this.handlePdf}>download</button>
            </div>
        );
    }

}

export default DomToImg;