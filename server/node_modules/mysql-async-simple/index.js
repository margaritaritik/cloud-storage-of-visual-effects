const util = require('util');

function makeDb() {
  return {
    connect(connection) {
      return util.promisify( connection.connect )
        .call( connection );
    },
    query(connection, sql, args) {
      return util.promisify( connection.query )
        .call( connection, sql, args );
    },
    close(connection) {
      return util.promisify( connection.end ).call( connection );
    },
    beginTransaction(connection) {
      return util.promisify( connection.beginTransaction )
        .call( connection );
    },
    commit(connection) {
      return util.promisify( connection.commit )
        .call( connection );
    },
    rollback(connection) {
      return util.promisify( connection.rollback )
        .call( connection );
    }
  };
}

async function withTransaction( connection, db, callback ) {
  try {
    await db.beginTransaction(connection);
    await callback();
    await db.commit(connection);
  } catch ( err ) {
    await db.rollback(connection);
    throw err;
  } finally {
    await db.close(connection);
  }
}

module.exports = {
    makeDb,
    withTransaction
};