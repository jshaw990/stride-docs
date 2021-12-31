import React, { useState } from "react";
import ReactEmbedGist from "react-embed-gist";

import "./CodeSnippets.styles.scss";

import HomeBreadcrumb from "../../components/homeBreadcrumb/HomeBreadcrumb.component";

const CodeSnippetsPage = () => {
	const [item, setItem] = useState("");

	const handleClick = (value) => {
		setItem(value);
	};

	return (
		<div className='code-snippets-page'>
			<HomeBreadcrumb />
			<div className='xl title'>Converting CSV to JSON</div>
			<div className='categories'>
				<div
					className='item'
					name='searchable'
					onClick={() => handleClick("searchable")}>
					<i className='icon fas fa-search'></i>
					<div className='lg'>Ticket Checker</div>
				</div>
				<div
					className='item'
					name='searchable'
					onClick={() => handleClick("json-ex")}>
					<i className="icon far fa-bookmark"></i>
					<div className='lg'>JSON Example</div>
				</div>
				<div
					className='item'
					name='searchable'
					onClick={() => handleClick("csv-ex")}>
					<i className="icon fas fa-table"></i>
					<div className='lg'>CSV Example</div>
				</div>
			</div>
			<div className='viewer'>
				{item === "searchable" && (
					<div>
						<ReactEmbedGist
							gist='jshaw990/116e0927e87583195fd45a498d5dab9a'
							wrapperClass='embed-gist'
							titleClass='lg'
						/>
					</div>
				)}
				{item === "json-ex" && (
					<div>
						<ReactEmbedGist
							gist='jshaw990/503137e785029a14a15303ca2d5d1be4'
							wrapperClass='embed-gist'
							titleClass='lg'
						/>
					</div>
				)}
				{item === "csv-ex" && (
					<div>
						<ReactEmbedGist
							gist='jshaw990/51f80789f1199f7026137a494a851f4b'
							wrapperClass='embed-gist'
							titleClass='lg'
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default CodeSnippetsPage;
