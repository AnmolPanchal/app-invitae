# Split BIG file into little chunks
# gsplit -l 10000 -d --additional-suffix=.tsv invitae-data.tsv fileName

export FIELDS=Gene,Nucleotide,Change,Protein,Change,Other,Mappings,Alias,Transcripts,Region,Reported,Classification,Inferred,Classification,Source,Last,Evaluated,Last,Updated,URL,Submitter,Comment,Assembly,Chr,Genomic,Start,Genomic,Stop,Ref,Alt,Accession,Reported,Ref,Reported,Alt

COUNTER=0
FILE_START=water
FILE_END=wine

while [ $COUNTER -lt 56 ]; do
  if [ $COUNTER -lt 10 ]
    then
      PREFIX=file0
    else
      PREFIX=file
  fi
  cat big-files/$FILE_START/$PREFIX$COUNTER.tsv | ruby -rjson -ne 'puts ENV["FIELDS"].split(",").zip($_.strip.split("\t")).inject({}){|h,x| h[x[0]]=x[1];h}.to_json' > big-files/$FILE_END/temp.json
  sed -e '1s/^/[/' -e 's/$/,/' -e '$s/,$/]/' big-files/$FILE_END/temp.json > big-files/$FILE_END/$PREFIX$COUNTER.json
  rm big-files/$FILE_END/temp.json
  echo $COUNTER conversion success!
  mongoimport -d invitae -c genes --file big-files/$FILE_END/$PREFIX$COUNTER.json --jsonArray
  let COUNTER=COUNTER+1
done


