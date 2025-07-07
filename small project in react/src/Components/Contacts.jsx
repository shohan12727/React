import React from 'react';

const Contacts = () => {
  return (
    <div>
      <div class="p-6">
  <form class="card-body">
    <div class="form-control">
      <label class="label mb-5">
        Email:
      </label> <br />
      <input type="email" placeholder="email@example.com" class="input input-bordered" />
    </div>
    <div class="form-control mt-4 mr-52">
      <textarea class="textarea textarea-bordered " placeholder="Your message..."></textarea>
    </div>
    <div class="form-control mt-6">
      <button class="btn btn-primary">Submit</button>
    </div>
  </form>
</div>

    </div>
  );
};

export default Contacts;