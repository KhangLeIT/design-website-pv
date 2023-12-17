import React, { useEffect, useRef, useState } from 'react';

import './EventClick.css';
import traicam from '../images/traicam.png'
import traichanh from '../images/traichanhday.png'
import traikhom from '../images/traikhom.png'
import traioi from '../images/traioi.png'
import traixoai from '../images/traixoai.png'
import * as THREE from 'three';

import logoindex from '../images/Cam/tamchicam.webp';
import img1 from '../images/Cam/traicam.webp';
import img2 from '../images/Cam/miengcam.webp';
import img3 from '../images/Cam/nuatraicam.webp';
import img4 from '../images/Cam/lacam.webp';
import img5 from '../images/Cam/lacam2.webp';
import la from '../images/Cam/lacam.webp'

import logoOi from '../images/Oi/Logo.webp'
import Oi1 from '../images/Oi/1.webp'
import Oi2 from '../images/Oi/2.webp'
import Oi3 from '../images/Oi/3.webp'
import Oi4 from '../images/Oi/4.webp'
import Oi5 from '../images/Oi/3.webp'

import logoXoai from '../images/Xoai/logo.webp'
import x1 from '../images/Xoai/1.webp'
import x2 from '../images/Xoai/2.webp'
import x3 from '../images/Xoai/3.webp'
import x4 from '../images/Xoai/4.webp'
import x5 from '../images/Xoai/3.webp'

import logoDua from '../images/Dua/logo.webp'
import d1 from '../images/Dua/1.webp'
import d2 from '../images/Dua/2.webp'
import d3 from '../images/Dua/3.webp'
import d4 from '../images/Dua/4.webp'
import d5 from '../images/Dua/3.webp'

import logoChanh from '../images/Chanhday/logo.webp'
import c1 from '../images/Chanhday/1.webp'
import c2 from '../images/Chanhday/2.webp'
import c3 from '../images/Chanhday/3.webp'
import c4 from '../images/Chanhday/4.webp'
import c5 from '../images/Chanhday/3.webp'


const importImages = (r) => {
    return r.keys().reduce((images, path) => {
        const key = path.replace(/^.*[\\/]/, '').replace(/\.\w+$/, ''); // Lấy tên file mà không có đuôi mở rộng
        images[key] = r(path).default;
        return images;
    }, {});
};


const EventClick = () => {



    const [selectedImage, setSelectedImage] = useState({});
    const handleSelectImage = (index) => {
        const updatedSelection = { ...selectedImage };
        Object.keys(updatedSelection).forEach(key => {
            updatedSelection[key] = false;
        });
        updatedSelection[index] = true;
        setSelectedImage(updatedSelection);
    };


    const [selectedLi, setSelectedLi] = useState(null);

    const handleImageClick = (index) => {
        handleSelectImage(index);
        setSelectedLi(index);
        localStorage.setItem('selectedIndex', index);
    };

    useEffect(() => {
        // Thiết lập trạng thái ban đầu cho thẻ li đầu tiên
        setSelectedLi(2)


    }, []);


    const [logo, setLogo] = useState(logoindex);
    const [images, setImages] = useState([
        img1,
        img2,
        la,
        img3,
        img4,
        img5,
        la,
        la,
        la,
        la,
    ]);

    const Image3DComponent = () => {
        const canvasRef = useRef(null);




        useEffect(() => {
            let width = window.innerWidth;
            let height = window.innerHeight;

            const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
            renderer.setSize(width, height);

            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x2196f3); // Blue background

            const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

            const imageCount = 10;
            const radius = 7;

            const logoTexture = new THREE.TextureLoader().load(logo);

            const logoSizeX = 10; // Chiều dài của logo
            const logoSizeY = 13; // Chiều cao của logo
            const logoGeometry = new THREE.PlaneGeometry(logoSizeX, logoSizeY);
            const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture, side: THREE.DoubleSide, transparent: true });
            const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
            scene.add(logoMesh);

            const logoOffset = 3; // Distance between logo and images
            const imageOffset = 3; // Distance between images 

            images.forEach((image, index) => {
                const angle = (Math.PI * 2 * index) / imageCount;

                // Tính toán vị trí x và z của logo
                const logoX = logoOffset * Math.cos(angle);
                const logoZ = logoOffset * Math.sin(angle);

                // Tính toán vị trí x và z của hình ảnh
                const imageX = (logoOffset + imageOffset) * Math.cos(angle);
                const imageZ = (logoOffset + imageOffset) * Math.sin(angle);

                const texture = new THREE.TextureLoader().load(image);
                const aspect = texture.image ? texture.image.width / texture.image.height : 1;

                const imageWidth = 2 * aspect;
                const imageHeight = 2;

                const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);
                const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true });

                const mesh = new THREE.Mesh(geometry, material);

                // Xác định vị trí y dựa trên index
                const yPos = index % 2 === 0 ? imageOffset : -imageOffset;

                // Đặt vị trí của hình ảnh dựa trên vị trí của logo và vị trí của hình ảnh
                mesh.position.set(logoX + imageX, yPos, logoZ + imageZ);

                scene.add(mesh);
            });


            logoMesh.position.set(0, 0, 0);

            camera.position.z = 15;

            const animate = () => {
                width = window.innerWidth;
                height = window.innerHeight;

                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();

                requestAnimationFrame(animate);

                renderer.render(scene, camera);
            };

            animate();

            window.addEventListener('resize', () => {
                width = window.innerWidth;
                height = window.innerHeight;

                renderer.setSize(width, height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            });

            return () => {
                window.removeEventListener('resize', () => { });
            };
        }, []);

        return <canvas ref={canvasRef} />;
    };


    return (

        <div>

            <Image3DComponent />
            <div className='selected-text'>
                <a href='/details'>Let's go into detail</a>
            </div>
            <div className="content-container">

                <div className="content">
                    <nav className="content-nav">
                        <ul className="content-ul">

                            <li key={1} className={selectedLi === 1 ? 'selected-li' : ''}  >
                                <img
                                    src={traioi}
                                    alt={`TraiOi ${1}`}
                                    className={selectedImage[1] ? 'selected' : 'hover'}
                                    onClick={() => {
                                        handleImageClick(1);

                                        setLogo(logoOi)
                                        setImages([
                                            Oi1,
                                            Oi2,
                                            la,
                                            Oi3,
                                            Oi4,
                                            Oi5,
                                            la,
                                            la,
                                            la,
                                            la,
                                        ])

                                    }}
                                />
                            </li>
                            <li key={2} className={selectedLi === 2 ? 'selected-li' : ''}>
                                <img
                                    src={traicam}
                                    alt={`TraiCam ${2}`}
                                    className={selectedImage[2] ? 'selected' : 'hover'}
                                    onClick={() => {
                                        handleImageClick(2)
                                        setLogo(logoindex)
                                        setImages([
                                            img1,
                                            img2,
                                            la,
                                            img3,
                                            img4,
                                            img5,
                                            la,
                                            la,
                                            la,
                                            la,
                                        ])
                                    }}
                                />
                            </li>
                            <li key={3} className={selectedLi === 3 ? 'selected-li' : ''}>
                                <img
                                    src={traixoai}
                                    alt={`TraiXoai ${3}`}
                                    className={selectedImage[3] ? 'selected' : 'hover'}
                                    onClick={() => {
                                        handleImageClick(3)
                                        setLogo(logoXoai)
                                        setImages([
                                            x1,
                                            x2,
                                            la,
                                            x3,
                                            x4,
                                            x5,
                                            la,
                                            la,
                                            la,
                                            la,

                                        ])
                                    }}
                                />
                            </li>
                            <li key={4} className={selectedLi === 4 ? 'selected-li' : ''}>
                                <img
                                    src={traikhom}
                                    alt={`TraiKhom ${4}`}
                                    className={selectedImage[4] ? 'selected' : 'hover'}
                                    onClick={() => {
                                        handleImageClick(4)
                                        setLogo(logoDua)
                                        setImages([
                                            d1,
                                            d2,
                                            la,
                                            d3,
                                            d4,
                                            d5,
                                            la,
                                            la,
                                            la,
                                            la,

                                        ])
                                    }}
                                />
                            </li>
                            <li key={5} className={selectedLi === 5 ? 'selected-li' : ''}>
                                <img
                                    src={traichanh}
                                    alt={`TraiChanh ${5}`}
                                    className={selectedImage[5] ? 'selected' : 'hover'}
                                    onClick={() => {
                                        handleImageClick(5)
                                        setLogo(logoChanh)
                                        setImages([
                                            c1,
                                            c2,
                                            la,
                                            c3,
                                            c4,
                                            c5,
                                            la,
                                            la,
                                            la,
                                            la,

                                        ])
                                    }}
                                />
                            </li>

                        </ul>
                    </nav>
                </div>
            </div></div>
    );
}


export default EventClick;
