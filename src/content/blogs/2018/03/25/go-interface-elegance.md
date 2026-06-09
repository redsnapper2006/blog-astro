---
title: "Go Interface Elegance"
pubDatetime: 2018-03-25T21:54:00+08:00
description: "Take {Reader, Writer, Seeker, Closer} as an example"
tags:
  - "tech"
---

1. at first, generic interface definitions [from io pkg]

   ```go
   type Reader interface {
     Read(p []byte) (n int, err error)
   }

   type Writer interface {
     Write(p []byte) (n int, err error)
   }

   type Seeker interface {
     Seek(offset int64, whence int) (int64, error)
   }

   type Closer interface {
     Close() error
   }
   ```

2. interface compositions

   ```go
   type ReadWriter interface {
     Reader
     Writer
   }

   type ReadSeeker interface {
     Reader
     Seeker
   }

   type ReadCloser interface {
     Reader
     Closer
   }

   type WriteSeeker interface {
     Writer
     Seeker
   }

   type WriteCloser interface {
     Writer
     Closer
   }

   type ReadWriteSeeker interface {
     Reader
     Writer
     Seeker
   }

   type ReadWriteCloser interface {
     Reader
     Writer
     Closer
   }
   ```

3. implement the interface's function

   ```go
   type StructA struct {
   }

   func (p *StructA) Read(p []byte) (n int, err error) {
   }

   func (p *StructA) Write(p []byte) (n int, err error) {
   }

   func (p *StructA) Seek(offset int64, whence int) (int64, error){
   }

   type StructB struct {
   }

   func (p *StructB) Read(p []byte) (n int, err error) {
   }

   func (p *StructB) Write(p []byte) (n int, err error) {
   }

   func (p *StructB) Close() error {
   }
   ```

   struct StructA has implemented interfaces

   - Reader
   - Writer
   - Seeker
   - ReadWriter
   - ReadSeeker
   - WriteSeeker
   - ReadWriteSeeker

   struct StructA can work as a parameter on below functions

   ```go
   func Func(p *Reader) (int, error);
   func Func(p *Writer) (int, error);
   func Func(p *Seeker) (int, error);
   func Func(p *ReadWriter) (int, error);
   func Func(p *ReadSeeker) (int, error);
   func Func(p *WriteSeeker) (int, error);
   func Func(p *ReadWriteSeeker) (int, error);
   ```

   struct StructB has implemented interfaces

   - Reader
   - Writer
   - Closer
   - ReadWriter
   - ReadCloser
   - WriteCloser
   - ReadWriteCloser

   struct StructB can work as a parameter on below functions

   ```go
   func Func(p *Reader) (int, error);
   func Func(p *Writer) (int, error);
   func Func(p *Closer) (int, error);
   func Func(p *ReadWriter) (int, error);
   func Func(p *ReadCloser) (int, error);
   func Func(p *WriteCloser) (int, error);
   func Func(p *ReadWriteCloser) (int, error);
   ```

4. easy to add functions to implement new interface with same signatures.

KISS and DRY.
