// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use("test");

// insert the data from arts collection into the exhibitor dbs arts collection

db.getCollection("arts").aggregate([
    { $match: { } },
    { $out: "exhibitor.arts" }
  ]);
  