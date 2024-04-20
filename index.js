import Replicate from 'replicate';
process.loadEnvFile();

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN
})

//this is for chat

/*const input = {
    top_k: 50,
    top_p: 0.9,
    prompt: "An astronaut riding a rainbow unicorn, cinematic, dramatic",
    max_tokens: 512,
    min_tokens: 0,
    temperature: 0.6,
    prompt_template: "<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n\nYou are a helpful assistant<|eot_id|><|start_header_id|>user<|end_header_id|>\n\n{prompt}<|eot_id|><|start_header_id|>assistant<|end_header_id|>\n\n",
    presence_penalty: 1.15,
    frequency_penalty: 0.2
  };
  
  for await (const event of replicate.stream("meta/meta-llama-3-70b-instruct", { input })) {
    process.stdout.write(event.toString());
  };*/

//this is for image
console.log("Running the model...");
const output = await replicate.run(
  "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
  {
    input: {
      prompt: "Genera un Husky en la nieve",
    }
  }
);
console.log(output);
