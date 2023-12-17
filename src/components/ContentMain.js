import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

import logoindex from '../images/Cam/tamchicam.webp';
import traicam from '../images/Cam/traicam.webp';
import traichanh from '../images/Cam/miengcam.webp';
import traikhom from '../images/Cam/nuatraicam.webp';
import traioi from '../images/Cam/lacam.webp';
import traixoai from '../images/Cam/lacam2.webp';
import la from '../images/Cam/lacam.webp'


const Image3DComponent = () => {
  // const canvasRef = useRef(null);
  // const logo = logoindex;
  // const images= [traixoai, traicam, la, traikhom, traioi, traichanh, la, la, la, la];
  
  // useEffect(() => {
  //   let width = window.innerWidth;
  //   let height = window.innerHeight;

  //   const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
  //   renderer.setSize(width, height);

  //   const scene = new THREE.Scene();
  //   scene.background = new THREE.Color(0x2196f3); // Blue background

  //   const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

  //   const imageCount = 10;
  //   const radius = 7;

  //   const logoTexture = new THREE.TextureLoader().load(logo);

  //   const logoSizeX = 10; // Chiều dài của logo
  //   const logoSizeY = 13; // Chiều cao của logo
  //   const logoGeometry = new THREE.PlaneGeometry(logoSizeX, logoSizeY);
  //   const logoMaterial = new THREE.MeshBasicMaterial({ map: logoTexture, side: THREE.DoubleSide, transparent: true });
  //   const logoMesh = new THREE.Mesh(logoGeometry, logoMaterial);
  //   scene.add(logoMesh);

  //   const logoOffset = 3; // Distance between logo and images
  //   const imageOffset = 3; // Distance between images 
    
  //   images.forEach((image, index) => {
  //     const angle = (Math.PI * 2 * index) / imageCount;

  //     // Tính toán vị trí x và z của logo
  //     const logoX = logoOffset * Math.cos(angle);
  //     const logoZ = logoOffset * Math.sin(angle);

  //     // Tính toán vị trí x và z của hình ảnh
  //     const imageX = (logoOffset + imageOffset) * Math.cos(angle);
  //     const imageZ = (logoOffset + imageOffset) * Math.sin(angle);

  //     const texture = new THREE.TextureLoader().load(image);
  //     const aspect = texture.image ? texture.image.width / texture.image.height : 1;

  //     const imageWidth = 2 * aspect;
  //     const imageHeight = 2;

  //     const geometry = new THREE.PlaneGeometry(imageWidth, imageHeight);
  //     const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide, transparent: true });

  //     const mesh = new THREE.Mesh(geometry, material);

  //     // Xác định vị trí y dựa trên index
  //     const yPos = index % 2 === 0 ? imageOffset : -imageOffset;

  //     // Đặt vị trí của hình ảnh dựa trên vị trí của logo và vị trí của hình ảnh
  //     mesh.position.set(logoX + imageX, yPos, logoZ + imageZ);

  //     scene.add(mesh);
  //   });


  //   logoMesh.position.set(0, 0, 0);

  //   camera.position.z = 15;

  //   const animate = () => {
  //     width = window.innerWidth;
  //     height = window.innerHeight;

  //     renderer.setSize(width, height);
  //     camera.aspect = width / height;
  //     camera.updateProjectionMatrix();

  //     requestAnimationFrame(animate);

  //     renderer.render(scene, camera);
  //   };

  //   animate();

  //   window.addEventListener('resize', () => {
  //     width = window.innerWidth;
  //     height = window.innerHeight;

  //     renderer.setSize(width, height);
  //     camera.aspect = width / height;
  //     camera.updateProjectionMatrix();
  //   });

  //   return () => {
  //     window.removeEventListener('resize', () => { });
  //   };
  // }, []);

  // return <canvas ref={canvasRef} />;
};

export default Image3DComponent;

