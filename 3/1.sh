#!/bin/bash

for ((i=1;i<=5;i++)); do
    filename="${i}.js"
    outputFile="${i}.ts"
    output=$(node "$filename")
    echo -e "\n/*\noutput :" >> $outputFile
    echo -e "$output\n*/" >> $outputFile
done
