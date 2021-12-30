import React from "react";

import "./WebPvsPNG.styles.scss";

import HomeBreadcrumb from "../../components/homeBreadcrumb/HomeBreadcrumb.component";

import misc0 from "../../assets/images/misc/webp-png-0.png";
import misc1 from "../../assets/images/misc/webp-png-0.webp";

const WebPvsPNG = () => {
	return (
		<div className='web-p-vs-png article-page'>
			<HomeBreadcrumb />
			<div className='title xl'>WebP vs PNG</div>
			<div className='content'>
				<div className='para'>
					<div className='lg'>What is WebP?</div>
					WebP is an emerging image format that was created in 2010 and is under
					development by Google. It provides superior lossless and lossy
					compression for images, while remain high quality. The degree of lossy
					compression is adjustable meaning we determine the trade-off between
					the size and quality.
				</div>
				<div className='para'>
					<div className='lg'>Advantages</div>
					<li>Smaller file size compared to PNG or JPG</li>
					<li>Possessess lossless and lossy compression mode</li>
					<li>Feature Alpha transparency similar to PNGs</li>
					<li>Ability to add animation to images</li>
					<li>Faster loading time compared to PNG images</li>
					<li>
						Images that load faster and are a smaller size will decrease the
						time to First Contentful Paint, Time to Interactive, and Largest
						Contentful Paint subsiquently improving the scores within Google's
						Lighthouse thus increasing the SEO value of the website
					</li>
					<div className='center'>
						<a href='#stats'>
							Checkout some stats below for more information on how WebP is
							superior to PNGs
						</a>
					</div>
				</div>
				<div className='para'>
					<div className='lg'>Disadvantages</div>
					<li>
						Poor compatability, only Chrome, Edge, Firefox and Opera have native
						support for WebP image formats. Safari only has partial
						compatability, <strong>however</strong>, Safari on iOS is fully
						compatable with WebP
					</li>
					<li>
						General graphic editing software cannot open or edit WebP images
					</li>
					<li>
						WordPress does not have native support for WebP, a third-party
						plugin is necessary to use them
					</li>
				</div>
				<div className='para'>
					<div className='lg'>WebP with WordPress</div>
					<div className='para'>
						As stated above, WordPress does not have native support for the WebP
						image format. In order to effectively use them, third party plugins
						must be added into the website
					</div>
					<div className='para'>
						The plugin that I would recommend using for this is{" "}
						<a
							href='https://wordpress.org/plugins/webp-express/'
							target='_blank'
							rel='noreferrer'>
							WebP Express by Bjørn Rosell
						</a>{" "}
						WebP Express is a completely free plugin and offers a wide variety
						of features, such as:
						<li>
							Utilization of the WebP Convert library to convert PNG/JPG images
							directly on your WordPress to WebP
						</li>
						<li>
							Automatic serving of PNG/JPG images in the WebP format on
							compatable devices/browsers without the necessity to convert them
							prior to
						</li>
						<li>
							Bulk conversion tools to take an existing site with many PNG/JPG
							images and convert them to WebP with the touch of a button
						</li>
						<li>
							Completely free, and without monthly image conversion limitations
						</li>
					</div>
				</div>
				<div className='para' id='stats'>
					<div className='lg'>Stats on WebP</div>
					<div>Lets take a look at the image below:</div>
					<div className='img-cont'>
						<div className='stats'>
							<img src={misc0} alt='' className='image' />
							<div>File type: PNG</div>
							<div>Image Resolution: 3008px x 1960px</div>
							<div>File Size: 669 kB</div>
						</div>
						<div className='stats'>
							<img src={misc1} alt='' className='image' />
							<div>File type: WebP</div>
							<div>Image Resolution: 3008px x 1960px</div>
							<div>File Size: 221 kB</div>
						</div>
					</div>
					<div className='center'>
						Taking the PNG above and converting it to a WebP from a PNG reduced
						the file size by over 300%!
					</div>
				</div>
				<div className='para'>
					<div className='lg'>Conversion Tools</div>
					<div>
						There are many conversion tools available online to take a{" "}
						<i>traditional</i> image and convert it to WebP.
					</div>
					<div>Some I would recommend are:</div>
					<li>
						<a
							href='https://www.birme.net/?target_width=&target_height=&no_resize=true&image_format=webp'
							target='_blank'
							rel='noreferrer'>
							Birme.net
						</a>{" "}
						- a free and flexible online bulk image resizer and converter. Can
						resize images to specific demensions and crop them proportionately.
					</li>
					<li>
						<a
							href='https://wordpress.org/plugins/webp-express/'
							target='_blank'
							rel='noreferrer'>
							WebP Express by Bjørn Rosell
						</a>{" "}
                        - a free WordPress plugin to convert/serve WebP images. 
					</li>
                    <li><a
							href='https://developers.google.com/speed/webp'
							target='_blank'
							rel='noreferrer'>
							WebP Converter by Google
						</a>{" "} - convert a collection of PNGs and JPGs to WebP by downloading Google's conversion tool</li>
				</div>
			</div>
		</div>
	);
};

export default WebPvsPNG;
