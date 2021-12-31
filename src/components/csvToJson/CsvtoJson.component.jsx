import React from "react";
import ReactEmbedGist from "react-embed-gist";

import HomeBreadcrumb from "../../components/homeBreadcrumb/HomeBreadcrumb.component";

const CSVtoJSON = () => {
	return (
		<div className='csv-to-json article-page'>
			<HomeBreadcrumb />
			<div className='xl title'>Converting CSV to JSON</div>
			<div className='content'>
				<div className='para'>
					<div className='lg'>CSV Data Type</div>
					<div className='para'>
						CSV, or Comma-Seperated Values is a delimited text file that uses a
						comma to seperate values. Each line of the file is a data record.
						Each record consists of one or more fields, seperated by commas. A
						CSV file will typically store tabular data (numbers and text) in
						plain text, in which case each line will have the same number of
						fields. The CSV file format is not fully standardized. Seperating
						values with commas is the foundation, but commas in the data or
						embedded line breaks have to be handled specifically.
					</div>
					<div>
						<ReactEmbedGist
							gist='jshaw990/51f80789f1199f7026137a494a851f4b'
							wrapperClass='embed-gist'
							titleClass='lg'
						/>
					</div>
				</div>
				<div className='para'>
					<div className='lg'>JSON Data Type</div>
					<div className='para'>
						JSON, or JavaScript Object Notation is an open standard file format
						and data interchange format that uses human-readable text to store
						and transmit data objects consisting of attribute-value pairs and
						arrays. JSON is a language independent data format, although derived
						from JavaScript, many modern programming languages include code to
						generate and parse JSON formatted data.
					</div>
					<div className='para'>
						JSON's basic data types are:
						<li>Numbers: intergers or floating number points</li>
						<li>
							Strings: delimited sequence of zero or more Unicode numbers,
							surrounded by double-quotes and support a backslash escaping
							syntax
						</li>
						<li>Boolean: either true or false values</li>
						<li>
							Array: an ordered list of zero or more elements, each of which can
							be any data type. Arrays use square bracket notation with
							comma-seperated elements
						</li>
						<li>
							Object: collection of name-value pairs where they name (aka. keys)
							are strings.
						</li>
						<li>null: an empty value using the word null</li>
						<div>
							You can see all of the listed data types in use in the JSON
							example below
						</div>
					</div>
					<div>
						<ReactEmbedGist
							gist='jshaw990/503137e785029a14a15303ca2d5d1be4'
							wrapperClass='embed-gist'
							titleClass='lg'
						/>
					</div>
				</div>
				<div className='para'>
					<div className='lg'>Converting Data Types</div>
					<div>
						There are a number of tools available online in order to convert a
						CSV file to JSON.
					</div>
					<div>
						Some that I would recommend are:
						<li>
							<a
								href='https://www.convertcsv.com/csv-to-json.htm'
								target='_blank'
								rel='noreferrer'>
								ConvertCSV.com
							</a>
						</li>
						<li>
							<a href='https://csvjson.com/' target='_blank' rel='noreferrer'>
								CSVJSON.com
							</a>
						</li>
					</div>
				</div>
				<div className='para'>
					<div className='lg'>Other Useful Tools</div>
					<div className='para'>
						Some other useful tools that I recommend when working with JSON data
						are:
					</div>
					<li>
						<a href='https://jsonlint.com/' target='_blank' rel='noreferrer'>
							JSON Validator
						</a>
						: a validator and reformatter for JSON, a lightweight
						data-interchange format. Copy and paste, directly type, or input a
						URL in the editor above and tidy and validate your messy JSON code.
					</li>
					<li>
						<a
							href='http://www.objgen.com/json'
							target='_blank'
							rel='noreferrer'>
							JSON Builder
						</a>
						: Enter or paste plain text and generate a valid JSON file.
					</li>
				</div>
			</div>
		</div>
	);
};

export default CSVtoJSON;
