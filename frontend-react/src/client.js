import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'process.env.zba352do',
    dataset: 'production',
    apiVersion: '2022-10-21',
    useCdn: true,
    token: 'process.env.skyFaosxOiyxZrusGi1CCDDcErMC5BeZu2mmnB5j1WrDXPhOuLREY3QwAKaKSYBq2m7IONmTtqQMyxoCnE3wqx72uD4xqUZuRIlJrHKDExyHyWFWOFsdCfQAzr34mUNXQBMGHLn7MmR97Wa9uXCktYqY5rE2CdgWzzhvQ7AEeKwUKcchtSjL'

});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)