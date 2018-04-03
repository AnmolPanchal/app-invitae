COUNTER=3
while [ $COUNTER -lt 10 ]; do
  mongoimport -h ds123129.mlab.com:23129 -d invitae -c genes -u root -p root --file /Users/ben/Desktop/rr-invit/big-breaker/big-files/wine/file0$COUNTER.json --jsonArray
  let COUNTER=COUNTER+1
done
