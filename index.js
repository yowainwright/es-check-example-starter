import { describe, it } from 'mocha';
import assert from 'assert';
import { exec } from 'child_process';

describe('test es6 classes', () => {
  it('pass', (done) => {
    exec('es-check es6 ./fixtures/es6-classes.js', (err, stdout, stderr) => {
      if (err) {
        console.error(err.stack);
        console.error(stdout.toString());
        console.error(stderr.toString());
        done(err);
        return;
      }
      done();
    });
  });

  it('fail', (done) => {
    exec('es-check es5 ./fixtures/es6-classes.js', (err, stdout, stderr) => {
      assert(err);
      console.log(stdout);
      done();
    });
  });
});
