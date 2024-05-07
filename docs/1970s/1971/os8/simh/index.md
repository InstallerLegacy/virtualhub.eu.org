---
keywords: ["OS/8", "PDP-8", SIMH, 1970s, 1971]
image: ./OS8-SIMH-3.webp
description: 'We can run ! OS/8 on the SIMH PDP-8 emulator. First, we need to download the ! OS/8 kit. You can download the kit needed to run ! OS/8 on the SIMH PDP-8 emulator from the "SIMH Legacy" website:'
sidebar_position: 1
sidebar_label: "! OS/8 on SIMH"
---

# How to install ! OS/8 on SIMH?

![SIMH PDP-8 emulator with ! OS/8](./OS8-SIMH-3.webp)

We can run [! OS/8](/1970s/1971/os8) on the SIMH PDP-8 emulator. First, we need to download the ! OS/8 kit.

## Downloads

You can download the kit needed to run ! OS/8 on the SIMH PDP-8 emulator from the ["SIMH Legacy" website](http://simh.trailing-edge.com/):

- [! OS/8 kit](http://simh.trailing-edge.com/kits/os8swre.tar.Z)

If you are on Windows, you may need to install additional software such as [7-Zip](https://www.7-zip.org/) to extract the kit.

## Using ! OS/8

:::tip

If you have not already installed SIMH PDP-8 emulator, see [the VirtualHub Setup tutorial on how to do so](https://setup.virtualhub.eu.org/simh-pdp8/) on Linux and Windows.

:::

Extract the kit you downloaded. Inside you will find two folders. Open the folder named `Disks`. Inside, you will find two files. Create a folder somewhere to store the files for this VM, and move the file named `os8_rx.dsk` into it.

Now we will create a config file for our VM. Create a text file called `pdp8.ini` with the following content in the VM folder:

```ini
attach rx0 os8_rx.dsk
boot rx0
```

![pdp8.ini](./OS8-SIMH-1.webp)

Now open a terminal and move to the VM folder. Run the following command to start the emulator:

```bash
pdp8
```

![pdp8](./OS8-SIMH-2.webp)

After the emulator starts, you can enter `DIR` to see a list of files available:

![List of files in ! OS/8](./OS8-SIMH-3.webp)

That's it! We used ! OS/8. We can create a shell script to make it easy to launch the VM.

### Linux

Create a file called `OS8.sh` with the following content:

```bash
#!/bin/bash
pdp8
```

Now make the file executable:

```bash
chmod +x OS8.sh
```

Now you can start the VM using the shell script. For example, on KDE you can right-click the file and choose `Run in Konsole` or on GNOME, where you can right-click the file and choose `Run as executable`. The VM will start.

See the [manuals section](/1970s/1971/os8/#manuals) on the [main ! OS/8 page](/1970s/1971/os8/) to learn how to use it.

### Windows

Create a file called `OS8.bat` with the following content:

```bash
pdp8
```

Now you can start the VM by double-clicking the shell script. See the [manuals section](/1970s/1971/os8/#manuals) on the [main ! OS/8 page](/1970s/1971/os8/) to learn how to use it.

## Credits

- The disk image and other files used above are from a kit available on [SimH "Classic" website](http://simh.trailing-edge.com/).

## Video tutorial

Do you want to follow the tutorial by watching a video? We will post a video on our [YouTube channel](https://www.youtube.com/@virtua1hub) soon.

Archives of this tutorial may be available on [Wayback Machine](https://web.archive.org/web/*/https://virtualhub.eu.org/1970s/1971/os8/simh/).
