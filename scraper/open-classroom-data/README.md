**** Be connected to mongodb ****
**** File must be in the directory you're in to simply call it in the last part (--out and --file) ****
**** Since we are importing, we will be using HOW TO IMPORT COLLECTIONS ****

HOW TO EXPORT COLLECTIONS

mongoexport --db open-classroom --collection buildings --out ____________.json

HOW TO IMPORT COLLECTIONS

mongoimport --db open-classroom --collection buildings --file _____________.json